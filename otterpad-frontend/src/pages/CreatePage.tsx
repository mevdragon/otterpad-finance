import React from "react";
import {
  Layout,
  Form,
  Input,
  InputNumber,
  Button,
  message,
  Card,
  Switch,
  Tooltip,
  Space,
} from "antd";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
  usePublicClient,
} from "wagmi";
import { parseEther, isAddress, Address, decodeEventLog } from "viem";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AppLayout from "../AppLayout";
import { useMediaQuery } from "react-responsive";
import { OtterPadFactory__factory } from "../typechain-types";
import { v4 as uuidv4 } from "uuid";

interface FundForm {
  title: string;
  richInfoUrl?: string;
  description?: string;
  media?: string;
  website?: string;
  twitter?: string;
  saleToken: string;
  paymentToken: string;
  foundersWallet: string;
  startPrice: string;
  endPrice: string;
  targetLiquidity: string;
  upfrontRakeBPS: number;
  escrowRakeBPS: number;
  useCustomRichInfo: boolean;
}

const CONTRACT_ADDRESS = "0xf56759Df56bA0fe7294c75715E8eD2d2b065577F" as const;

const CreatePage: React.FC = () => {
  const [form] = Form.useForm<FundForm>();
  const { isConnected } = useAccount();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [useCustomInfo, setUseCustomInfo] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [txHash, setTxHash] = React.useState<`0x${string}`>();
  const publicClient = usePublicClient();

  const { writeContractAsync } = useWriteContract();

  const {
    data: receipt,
    isSuccess,
    isError,
  } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const handleCreateFund = async (values: FundForm) => {
    try {
      setIsSubmitting(true);

      const richInfoUrl = values.useCustomRichInfo
        ? values.richInfoUrl!
        : "https://api.legions.bot/api/w/officex/jobs/run_wait_result/f/f/officex/otterpad_rest_api?token=ixJCgjvjwtok1RyDjxeaWC1igjaoNWwF&payload=e30%3D";

      messageApi.loading({
        content: "Please confirm the transaction in your wallet...",
        key: "txn",
        duration: 0,
      });

      const hash = await writeContractAsync({
        address: CONTRACT_ADDRESS as Address,
        abi: OtterPadFactory__factory.abi,
        functionName: "createFundraiser",
        args: [
          BigInt(Math.max(values.upfrontRakeBPS, 100)),
          BigInt(values.escrowRakeBPS),
          BigInt(values.startPrice),
          BigInt(values.endPrice),
          BigInt(values.targetLiquidity),
          values.saleToken as Address,
          values.paymentToken as Address,
          values.foundersWallet as Address,
          values.title,
          richInfoUrl,
        ],
      });

      messageApi.loading({
        content: "Transaction submitted. Waiting for confirmation...",
        key: "txn",
        duration: 0,
      });

      setTxHash(hash);
    } catch (error) {
      console.error("Create fund error:", error);
      messageApi.error({
        content:
          error instanceof Error ? error.message : "Failed to create fund",
        key: "txn",
        duration: 5,
      });
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    async function processTxReceipt() {
      if (isSuccess && receipt && publicClient) {
        try {
          // Get the return data from the transaction
          const result = await publicClient.getTransactionReceipt({
            hash: receipt.transactionHash,
          });

          // Find the contract creation event
          const fundAddressLog = result.logs.find((log) => {
            try {
              const decodedLog = decodeEventLog({
                abi: OtterPadFactory__factory.abi,
                data: log.data,
                topics: log.topics,
              });
              return decodedLog.eventName === "FundCreated";
            } catch {
              return false;
            }
          });

          if (fundAddressLog) {
            const decodedLog = decodeEventLog({
              abi: OtterPadFactory__factory.abi,
              data: fundAddressLog.data,
              topics: fundAddressLog.topics,
            });

            // Get the fund address from the decoded log
            const fundAddress = decodedLog.args.fund as string;

            messageApi.success({
              content: "Fund created successfully!",
              key: "txn",
              duration: 3,
            });

            // Navigate to the fund page with the new address
            navigate(`/fund/${fundAddress}`);
          } else {
            throw new Error("Could not find fund creation event");
          }
        } catch (error) {
          console.error("Error processing receipt:", error);
          messageApi.error({
            content: "Error getting fund address",
            key: "txn",
            duration: 5,
          });
        }
        setIsSubmitting(false);
      }

      if (isError) {
        messageApi.error({
          content: "Transaction failed",
          key: "txn",
          duration: 5,
        });
        setIsSubmitting(false);
      }
    }

    processTxReceipt();
  }, [isSuccess, isError, receipt, messageApi, navigate, publicClient]);

  const validateEthereumAddress = (_: any, value: string) => {
    if (!value || !isAddress(value)) {
      return Promise.reject(new Error("Invalid Ethereum address"));
    }
    return Promise.resolve();
  };

  const handleCustomInfoChange = (checked: boolean) => {
    setUseCustomInfo(checked);
    form.setFieldsValue({ useCustomRichInfo: checked });
  };

  return (
    <AppLayout>
      {contextHolder}
      <Layout
        style={{
          minHeight: "100%",
          background: "#f5f5f5",
          padding: "42px 16px 16px 16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          title="Create New Fund"
          style={{
            width: isDesktop ? "600px" : "100%",
            maxWidth: "100%",
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleCreateFund}
            disabled={!isConnected || isSubmitting}
            initialValues={{
              useCustomRichInfo: false,
              upfrontRakeBPS: 100,
            }}
          >
            <Form.Item
              label={
                <Space>
                  Fund Title
                  <Tooltip title="The name of your fundraising campaign">
                    <InfoCircleOutlined />
                  </Tooltip>
                </Space>
              }
              name="title"
              rules={[
                { required: true, message: "Please input the fund title!" },
              ]}
            >
              <Input placeholder="My Awesome Fund" />
            </Form.Item>

            <Form.Item
              label={
                <Space>
                  Sale Token Address
                  <Tooltip title="The token address that will be sold in this fundraiser">
                    <InfoCircleOutlined />
                  </Tooltip>
                </Space>
              }
              name="saleToken"
              rules={[
                {
                  required: true,
                  message: "Please input the sale token address!",
                },
                { validator: validateEthereumAddress },
              ]}
            >
              <Input placeholder="0x..." />
            </Form.Item>

            <Form.Item
              label={
                <Space>
                  Payment Token Address
                  <Tooltip title="The token address that will be used for payments">
                    <InfoCircleOutlined />
                  </Tooltip>
                </Space>
              }
              name="paymentToken"
              rules={[
                {
                  required: true,
                  message: "Please input the payment token address!",
                },
                { validator: validateEthereumAddress },
              ]}
            >
              <Input placeholder="0x..." />
            </Form.Item>

            <Form.Item
              label={
                <Space>
                  Founders Wallet Address
                  <Tooltip title="The wallet address that will receive the funds">
                    <InfoCircleOutlined />
                  </Tooltip>
                </Space>
              }
              name="foundersWallet"
              rules={[
                {
                  required: true,
                  message: "Please input the founders wallet address!",
                },
                { validator: validateEthereumAddress },
              ]}
            >
              <Input placeholder="0x..." />
            </Form.Item>

            <Form.Item
              label={
                <Space>
                  Start Price
                  <Tooltip title="Initial token price at the start of the fundraiser">
                    <InfoCircleOutlined />
                  </Tooltip>
                </Space>
              }
              name="startPrice"
              rules={[
                { required: true, message: "Please input the start price!" },
              ]}
            >
              <Input placeholder="0.0" />
            </Form.Item>

            <Form.Item
              label={
                <Space>
                  End Price
                  <Tooltip title="Final token price at the end of the fundraiser">
                    <InfoCircleOutlined />
                  </Tooltip>
                </Space>
              }
              name="endPrice"
              rules={[
                { required: true, message: "Please input the end price!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      !value ||
                      parseFloat(getFieldValue("startPrice")) <
                        parseFloat(value)
                    ) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("End price must be greater than start!")
                    );
                  },
                }),
              ]}
            >
              <Input placeholder="0.0" />
            </Form.Item>

            <Form.Item
              label={
                <Space>
                  Target Liquidity
                  <Tooltip title="Target amount of liquidity to be raised">
                    <InfoCircleOutlined />
                  </Tooltip>
                </Space>
              }
              name="targetLiquidity"
              rules={[
                {
                  required: true,
                  message: "Please input the target liquidity!",
                },
              ]}
            >
              <Input placeholder="0.0" />
            </Form.Item>

            <Form.Item
              label={
                <Space>
                  Upfront Rake (BPS)
                  <Tooltip title="Initial fee in basis points (100 = 1%)">
                    <InfoCircleOutlined />
                  </Tooltip>
                </Space>
              }
              name="upfrontRakeBPS"
              rules={[
                { required: true, message: "Please input the upfront rake!" },
              ]}
            >
              <InputNumber
                min={100}
                max={10000}
                style={{ width: "100%" }}
                placeholder="100"
              />
            </Form.Item>

            <Form.Item
              label={
                <Space>
                  Escrow Rake (BPS)
                  <Tooltip title="Escrow fee in basis points (100 = 1%)">
                    <InfoCircleOutlined />
                  </Tooltip>
                </Space>
              }
              name="escrowRakeBPS"
              rules={[
                { required: true, message: "Please input the escrow rake!" },
              ]}
            >
              <InputNumber
                min={0}
                max={10000}
                style={{ width: "100%" }}
                placeholder="100"
              />
            </Form.Item>

            <Form.Item
              label="Use Custom Rich Info"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Switch
                checked={useCustomInfo}
                onChange={handleCustomInfoChange}
                checkedChildren="Custom Rich Info URL"
                unCheckedChildren="Standard Info"
              />
            </Form.Item>

            {useCustomInfo ? (
              <Form.Item
                label={
                  <Space>
                    Rich Info URL
                    <Tooltip title="Custom URL for additional fund information">
                      <InfoCircleOutlined />
                    </Tooltip>
                  </Space>
                }
                name="richInfoUrl"
                rules={[
                  {
                    required: true,
                    message: "Please input the rich info URL!",
                  },
                ]}
              >
                <Input placeholder="https://example.com/fund-info" />
              </Form.Item>
            ) : (
              <>
                <Form.Item
                  label={
                    <Space>
                      Description
                      <Tooltip title="Detailed description of your fund">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Space>
                  }
                  name="description"
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="Describe your fund..."
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <Space>
                      Media URLs
                      <Tooltip title="Comma-separated list of media URLs">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Space>
                  }
                  name="media"
                >
                  <Input placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg" />
                </Form.Item>

                <Form.Item
                  label={
                    <Space>
                      Website
                      <Tooltip title="Official website URL">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Space>
                  }
                  name="website"
                >
                  <Input placeholder="https://example.com" />
                </Form.Item>

                <Form.Item
                  label={
                    <Space>
                      Twitter
                      <Tooltip title="Twitter handle (without @)">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Space>
                  }
                  name="twitter"
                >
                  <Input placeholder="username" />
                </Form.Item>
              </>
            )}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={isSubmitting}
                disabled={!isConnected || isSubmitting}
                style={{ width: "100%" }}
              >
                {!isConnected
                  ? "Connect Wallet to Continue"
                  : isSubmitting
                  ? "Creating Fund..."
                  : "Create Fund"}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Layout>
      <br />
      <br />
      <br />
      <br />
    </AppLayout>
  );
};

export default CreatePage;
