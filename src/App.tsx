import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertCircle,
  Cat,
  CheckCircle2,
  Database,
  Dog,
  Hospital,
  Mic,
  PawPrint,
  PlayCircle,
  ScanLine,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  UserRoundCheck,
} from "lucide-react";
import "./index.css";

import healthShot from "./assets/images/健康分析.png";
import advisorShot from "./assets/images/健康顾问.png";
import traceShotA from "./assets/images/追踪1.png";
import traceShotB from "./assets/images/追踪2.png";
import heroShot from "./assets/images/首页.png";

const painCards = [
  {
    title: "异常看不懂",
    detail: "宠物不会说话，轻微行为变化常被忽略或误读。",
    action: "AI 拍照、视频、录音识别联动，快速给出可执行判断。",
  },
  {
    title: "老病难区分",
    detail: "衰老现象和疾病信号容易混淆，决策依赖经验。",
    action: "健康基准线结合情绪热力图，持续比对风险趋势。",
  },
  {
    title: "就医决策重",
    detail: "信息不完整时就诊容易走弯路，成本和焦虑同步放大。",
    action: "症状追踪 + 病历管理 + 医生推荐，形成闭环决策链路。",
  },
];

const heroTags = [
  { text: "猫咪情绪识别", icon: Cat },
  { text: "狗狗行为预警", icon: Dog },
  { text: "异常叫声提示", icon: Mic },
];

const features = [
  "智能 Agent 对话",
  "拍照识别情绪",
  "视频识别行为",
  "录音识别健康",
  "今日情绪线",
  "本周趋势分析",
  "健康基准线对比",
  "饮食与生活建议",
  "智能时光轴总结",
  "症状多维追踪",
  "医生推荐与问诊",
  "疫苗和驱虫管理",
];

const personas = [
  {
    name: "小白",
    profile: "28 岁，首次养猫，城市独居",
    pain: "一遇到小异常就紧张，不知道该观察还是就医。",
    gain: "AI它提供即时判断和护理建议，减少误判焦虑。",
  },
  {
    name: "老王",
    profile: "65 岁，养中型犬，偏好直观结论",
    pain: "不容易判断衰老与疾病边界，希望少走弯路。",
    gain: "风险提醒和关键指标一目了然，操作门槛低。",
  },
  {
    name: "小林夫妇",
    profile: "35 岁，多宠家庭，重视长期管理",
    pain: "能处理基础问题，但复杂行为异常难持续追踪。",
    gain: "智能时光轴与病历整合，便于家庭协同管理。",
  },
];

const loop = [
  {
    step: "监测",
    detail: "拍照、视频、录音与日常记录同步采集行为和健康线索。",
  },
  {
    step: "分析",
    detail: "行为数据库与医疗知识库交叉建模，输出风险摘要和趋势。",
  },
  {
    step: "干预",
    detail: "推送护理建议、医生入口和随访节点，形成可追溯决策。",
  },
];

const screens = [
  {
    title: "首页 · 健康分析",
    text: "聚合健康评分、饮食建议、情绪热力图与医生推荐。",
    image: heroShot,
    alt: "首页健康分析和情绪热力图",
  },
  {
    title: "健康分析页",
    text: "活动指数、食欲指数与趋势曲线同屏展示，便于快速判断。",
    image: healthShot,
    alt: "健康分析页面趋势和指标",
  },
  {
    title: "健康顾问",
    text: "调用历史指标生成 AI 健康评分，异常时直接触发干预建议。",
    image: advisorShot,
    alt: "健康顾问推荐和咨询入口",
  },
];

const endorsements = [
  {
    label: "合作宠物医院",
    value: "100+",
    icon: Hospital,
    color: "text-[var(--med-green-dark)]",
    bgColor: "bg-[#10b981]/10", // var(--med-green)
  },
  {
    label: "兽医专家顾问团",
    value: "50+",
    icon: UserRoundCheck,
    color: "text-[var(--tech-blue-dark)]",
    bgColor: "bg-[#0ea5e9]/10", // var(--tech-blue)
  },
  {
    label: "AI 训练数据集",
    value: "1000万+",
    icon: Database,
    color: "text-[var(--tech-blue-dark)]",
    bgColor: "bg-[#0ea5e9]/10", // var(--tech-blue)
  },
  {
    label: "准确率验证",
    value: "98.5%",
    icon: ShieldCheck,
    color: "text-[var(--med-green-dark)]",
    bgColor: "bg-[#10b981]/10", // var(--med-green)
  },
];

const valueStyles = [
  "border-[#f2d8c7] bg-[#fff9f3]",
  "border-[#d9e9cf] bg-[#f4fbef]",
  "border-[#f6dcc8] bg-[#fff6ed]",
];

const personaStyles = [
  "border-[#f2d8c7] bg-[#fff9f4]",
  "border-[#d6e7d4] bg-[#f4fbf5]",
  "border-[#e7d8f2] bg-[#faf6ff]",
];

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-transparent text-[#3d2c24]">
      <Header />
      <div className="pointer-events-none fixed left-[-180px] top-[-130px] size-[390px] rounded-full bg-[#ffd6bb]/90 blur-[100px] animate-blob" />
      <div
        className="pointer-events-none fixed right-[-130px] top-[220px] size-[310px] rounded-full bg-[#ffe8cc]/80 blur-[80px] animate-blob-reverse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="pointer-events-none fixed bottom-[-180px] left-[18%] size-[430px] rounded-full bg-[#ffd9cf]/80 blur-[110px] animate-blob"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="pointer-events-none fixed right-[20%] top-[10%] size-[200px] rounded-full bg-[#fff0d4]/70 blur-[70px] animate-blob-reverse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="pointer-events-none fixed left-[30%] bottom-[20%] size-[250px] rounded-full bg-[#fff1f2]/70 blur-[80px] animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <header
        className="relative z-10 flex min-h-screen flex-col justify-center"
        id="top"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <a
            href="#main"
            className="sr-only rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#3d2c24] focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
          >
            跳转到主要内容
          </a>

          {/* Header removed, using fixed Header component */}

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e6cbb0] bg-white/60 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#7b4a2a] backdrop-blur-md animate-[fade-in-up_680ms_ease-out_both]">
                <span className="flex items-center gap-1.5">
                  <span className="flex gap-0.5">
                    <Cat className="size-4 text-[#ff8b59]" />
                    <Dog className="size-4 text-[#ff8b59]" />
                  </span>
                  <span>专为猫咪与狗狗家庭设计</span>
                </span>
                <span className="hidden h-3 w-px bg-[#e9cfbf] sm:block" />
                <span className="hidden text-[#9c7564] sm:block">
                  情绪 · 行为 · 声音全方位监测
                </span>
              </div>

              <h1 className="font-rounded-chinese mt-6 animate-[fade-in-up_680ms_ease-out_both] text-balance text-4xl font-black tracking-wider leading-tight text-[#3f261c] [animation-delay:110ms] md:text-5xl lg:text-6xl">
                别让“再观察一下”
                <br />
                错过最佳救治时机
              </h1>
              <p className="mt-6 max-w-2xl animate-[fade-in-up_680ms_ease-out_both] text-base leading-7 text-[#5a3928] [animation-delay:220ms] sm:text-lg">
                猫咪躲藏、狗狗频繁舔舐...这些不仅是情绪，更是求救信号。AI它通过音视频多模态分析，实时解读异常行为，让爱不留遗憾。
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#ff8b59] px-7 text-white hover:bg-[#f37543] shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all"
                >
                  <a href="#cta" className="flex items-center gap-2">
                    <Sparkles className="size-5" />
                    预约产品内测
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#e5cdb8] bg-white/70 px-7 text-[#6b4a3b] hover:bg-[#fff4ea]"
                >
                  <a href="#scenes" className="flex items-center gap-2">
                    <PlayCircle className="size-5" />
                    查看演示页面
                  </a>
                </Button>
              </div>

              <div className="mt-12 flex flex-col gap-4 border-t border-[#ebd8ca] pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="group flex items-center gap-2">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#fffcf7] text-[#ff8b59] shadow-sm ring-1 ring-[#ebdccf] transition-transform group-hover:scale-110">
                    <ScanLine className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-[#5a3a29]">
                    多模态识别
                  </span>
                </div>
                <div className="hidden h-8 w-px bg-[#ebd8ca] sm:block" />
                <div className="group flex items-center gap-2">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#fffcf7] text-[#ff8b59] shadow-sm ring-1 ring-[#ebdccf] transition-transform group-hover:scale-110">
                    <AlertCircle className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-[#5a3a29]">
                    异常行为预警
                  </span>
                </div>
                <div className="hidden h-8 w-px bg-[#ebd8ca] sm:block" />
                <div className="group flex items-center gap-2">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#fffcf7] text-[#ff8b59] shadow-sm ring-1 ring-[#ebdccf] transition-transform group-hover:scale-110">
                    <TrendingUp className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-[#5a3a29]">
                    健康趋势追踪
                  </span>
                </div>
                <div className="hidden h-8 w-px bg-[#ebd8ca] sm:block" />
                <div className="group flex items-center gap-2">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#fffcf7] text-[#ff8b59] shadow-sm ring-1 ring-[#ebdccf] transition-transform group-hover:scale-110">
                    <Stethoscope className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-[#5a3a29]">
                    医生辅助决策
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[320px] lg:max-w-[360px] animate-[float_6s_ease-in-out_infinite]">
              <div className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-[#3d2c24] bg-[#fffcf9] shadow-2xl animate-[breathe-shadow_4s_ease-in-out_infinite]">
                {/* Screen Content */}
                <div className="flex h-[600px] flex-col bg-[#fff9f4]">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 pt-6 pb-2">
                    <div>
                      <div className="text-xs text-[#8c6b5d]">下午 2:30</div>
                      <div className="text-lg font-bold text-[#3d2c24]">
                        今日健康
                      </div>
                    </div>
                    <div className="size-8 rounded-full bg-[#ffd6bb]" />
                  </div>

                  {/* Score Card */}
                  <div className="mx-4 mt-2 rounded-3xl bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#8c6b5d]">
                        综合评分
                      </span>
                      <span className="rounded-full bg-[#e6f4e2] px-2 py-0.5 text-xs font-bold text-[#4c8b3e]">
                        状态良好
                      </span>
                    </div>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-5xl font-black text-[#3d2c24]">
                        85
                      </span>
                      <span className="mb-1.5 text-sm text-[#8c6b5d]">
                        / 100
                      </span>
                    </div>
                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#f0f0f0]">
                      <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-[#ffcfb5] to-[#ff9362]" />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="mx-4 mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="text-xs text-[#8c6b5d]">情绪指数</div>
                      <div className="mt-2 text-xl font-bold text-[#3d2c24]">
                        平稳
                      </div>
                      <div className="mt-2 flex gap-1">
                        <div className="h-8 w-2 rounded-full bg-[#ffcfb5]" />
                        <div className="h-5 w-2 rounded-full bg-[#ffe4d6]" />
                        <div className="h-10 w-2 rounded-full bg-[#ff9362]" />
                        <div className="h-6 w-2 rounded-full bg-[#ffcfb5]" />
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="text-xs text-[#8c6b5d]">活跃度</div>
                      <div className="mt-2 text-xl font-bold text-[#3d2c24]">
                        中等
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs text-[#8c6b5d]">较昨日</span>
                        <span className="text-xs font-bold text-[#4c8b3e]">
                          ↑ 5%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Alerts */}
                  <div className="mx-4 mt-4 flex-1 rounded-t-3xl bg-white p-6 shadow-sm">
                    <div className="mb-4 text-sm font-bold text-[#3d2c24]">
                      实时监测记录
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 size-2 rounded-full bg-[#ff9362]" />
                        <div>
                          <div className="text-sm font-medium text-[#3d2c24]">
                            检测到异常叫声
                          </div>
                          <div className="text-xs text-[#8c6b5d]">
                            14:20 · 持续 15秒 · 建议关注
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 size-2 rounded-full bg-[#d8efcf]" />
                        <div>
                          <div className="text-sm font-medium text-[#3d2c24]">
                            进食记录
                          </div>
                          <div className="text-xs text-[#8c6b5d]">
                            12:30 · 摄入 45g · 正常
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 size-2 rounded-full bg-[#d8efcf]" />
                        <div>
                          <div className="text-sm font-medium text-[#3d2c24]">
                            情绪识别
                          </div>
                          <div className="text-xs text-[#8c6b5d]">
                            10:15 · 愉悦 · 互动良好
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10" id="main">
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/60 px-6 py-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm sm:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-[#3f261c] sm:text-3xl">
                专业数据与兽医监制，只为更精准的判断
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {endorsements.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`relative mb-3 flex size-14 overflow-hidden items-center justify-center rounded-2xl ${item.bgColor} ${item.color}`}
                  >
                    <div className="absolute inset-0 -skew-x-12 animate-[scan-light_3s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    <item.icon className="relative z-10 size-7" />
                  </div>
                  <div className={`text-3xl font-black ${item.color}`}>
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#6d4c34]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
          id="value"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">
              价值主张
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">
              从盲目担心到有依据地照护
            </h2>
            <p className="mt-4 text-base leading-7 text-[#593828]">
              围绕宠物家庭最常见的三类焦虑，AI它将识别、解释和干预串成一个可执行闭环。
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {painCards.map((card, idx) => (
              <Card
                key={card.title}
                className={`${valueStyles[idx]} py-4 shadow-[0_16px_34px_-30px_rgba(96,58,38,0.55)]`}
              >
                <CardHeader className="px-5 pb-1">
                  <CardTitle className="text-xl text-[#4a2d22]">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-[#5c3b2b]">
                    {card.detail}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-5 pt-2 text-sm leading-6 text-[#3f1d0d]">
                  {card.action}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
          id="features"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">
              核心功能
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">
              AI 能力藏在温和、顺手的日常体验里
            </h2>
            <p className="mt-4 text-base leading-7 text-[#593828]">
              覆盖观察、预警、建议与就医协同，减少反复试错。
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <Card key={item} className="border-[#ead6c5] bg-white/80 py-2">
                <CardContent className="flex items-center gap-2 px-4 py-3 text-sm font-semibold tracking-wide text-[#442113]">
                  <CheckCircle2 className="size-4 text-[#ff8b59]" />
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
          id="scenes"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">
              场景展示
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">
              三屏看懂 AI它 的核心产品体验
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {screens.map((screen) => (
              <Card
                key={screen.title}
                className="overflow-hidden border-[#e8d4c4] bg-white/85 py-4 shadow-[0_18px_40px_-34px_rgba(102,58,38,0.55)]"
              >
                <CardContent className="px-5 pt-1">
                  <img
                    src={screen.image}
                    alt={screen.alt}
                    className="h-[430px] w-full rounded-2xl object-cover"
                    width={390}
                    height={844}
                    loading="lazy"
                  />
                </CardContent>
                <CardHeader className="px-5 pt-0">
                  <CardTitle className="text-xl text-[#4b2f23]">
                    {screen.title}
                  </CardTitle>
                  <CardDescription className="text-[#5b3b2b]">
                    {screen.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
          aria-label="疾病追踪闭环"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <Card className="border-[#d9e8cf] bg-[#f5fbee] py-5 text-[#4b3126]">
              <CardHeader className="px-6 pb-2">
                <p className="text-sm font-semibold tracking-[0.12em] text-[var(--med-green-dark)] uppercase">
                  疾病追踪
                </p>
                <CardTitle className="text-3xl leading-tight">
                  症状追踪 + 健康管理，构建可追溯闭环
                </CardTitle>
                <CardDescription className="text-[#4e3a2d]">
                  持续监测行为变化，融合体温、心率、饮食排便与病历信息，形成多维交叉分析和持续提醒。
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-3 px-6 pt-2">
                {loop.map((item) => (
                  <Card
                    key={item.step}
                    className="border-[#d8e7d3] bg-white/80 py-4"
                  >
                    <CardHeader className="px-4 pb-2">
                      <CardTitle className="text-lg text-[#4c3126]">
                        {item.step}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pt-0 text-sm leading-6 text-[#4f3a2c]">
                      {item.detail}
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <Card className="overflow-hidden border-[#e8d5c5] bg-white/85 py-4">
                <CardContent className="px-4 py-2">
                  <img
                    src={traceShotA}
                    alt="症状模板化录入界面"
                    className="h-[360px] w-full rounded-2xl object-cover"
                    width={390}
                    height={844}
                    loading="lazy"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-[#e8d5c5] bg-white/85 py-4">
                <CardContent className="px-4 py-2">
                  <img
                    src={traceShotB}
                    alt="护理记录和报警节点界面"
                    className="h-[360px] w-full rounded-2xl object-cover"
                    width={390}
                    height={844}
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
          id="audience"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">
              适配人群
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">
              不同养宠阶段，都能获得匹配支持
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {personas.map((persona, idx) => (
              <Card key={persona.name} className={`${personaStyles[idx]} py-4`}>
                <CardHeader className="px-5">
                  <CardTitle className="text-[#472c20]">
                    {persona.name}
                  </CardTitle>
                  <CardDescription className="text-[#5d3d2c]">
                    {persona.profile}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 px-5 pt-0 text-sm leading-6">
                  <p className="text-[#503527]">{persona.pain}</p>
                  <p className="font-semibold text-[#4f3328]">{persona.gain}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
          id="cta"
        >
          <Card className="border-[#f0d0b8] bg-gradient-to-r from-[#fff2e5] via-[#ffe9dc] to-[#eff9eb] py-8 shadow-[0_32px_70px_-45px_rgba(109,67,43,0.6)]">
            <CardHeader className="px-6 text-center">
              <CardTitle className="text-3xl leading-tight text-[#43291f] md:text-4xl">
                让 AI它成为你和宠物之间的健康翻译官
              </CardTitle>
              <CardDescription className="mx-auto max-w-2xl text-base text-[#4f3427]">
                现在预约，优先获取首批内测资格、产品白皮书与商务接入方案。
              </CardDescription>
            </CardHeader>

            <CardContent className="mx-auto w-full max-w-2xl px-6 pt-4">
              <form
                action="mailto:hello@aita.app"
                method="post"
                encType="text/plain"
                className="grid gap-3 sm:grid-cols-[1fr_auto]"
              >
                <div className="space-y-2 text-left">
                  <Label htmlFor="contact" className="text-[#3d201f]">
                    联系邮箱
                  </Label>
                  <Input
                    id="contact"
                    name="邮箱"
                    type="email"
                    autoComplete="email"
                    spellCheck={false}
                    required
                    placeholder="name@example.com…"
                    className="h-11 border-[#e8c8b1] bg-white/90 text-[#4d3125] placeholder:text-[#806a54]"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-11 self-end rounded-full bg-[#ff8b59] px-6 text-white hover:bg-[#f37543]"
                >
                  <Send className="mr-2 size-4" />
                  获取商务与试用方案
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#edd8cb] px-4 py-6 text-center text-sm text-[#6a4532] sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2">
          <PawPrint className="size-4 text-[#ff8b59]" />
          <span>AI它 · 智能宠物呵护助手</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
