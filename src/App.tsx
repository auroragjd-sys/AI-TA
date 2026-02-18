import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "./index.css";

import advisorShot from "./assets/images/健康顾问.png";
import healthShot from "./assets/images/健康分析.png";
import heroShot from "./assets/images/首页.png";
import traceShotA from "./assets/images/追踪1.png";
import traceShotB from "./assets/images/追踪2.png";
import buddyPhoto from "./assets/images/智能小宠.jpg";

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

const heroStats = [
  {
    title: "3 种入口",
    text: "拍照 / 视频 / 录音协同识别猫狗异常",
  },
  {
    title: "1 条闭环",
    text: "监测、分析、干预一站式完成健康照护",
  },
  {
    title: "多角色适配",
    text: "新手、长者与多宠家庭都能直接使用",
  },
];

const heroTags = ["猫咪情绪识别", "狗狗行为预警", "异常叫声提示"];

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
    <div className="relative min-h-screen overflow-x-clip bg-[#fff7ef] text-[#3d2c24]">
      <div className="pointer-events-none absolute left-[-180px] top-[-130px] size-[390px] rounded-full bg-[#ffd6bb]/75 blur-[115px]" />
      <div className="pointer-events-none absolute right-[-130px] top-[220px] size-[310px] rounded-full bg-[#d8efcf]/60 blur-[95px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[18%] size-[430px] rounded-full bg-[#ffd9cf]/60 blur-[125px]" />

      <header className="relative z-10" id="top">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <a
            href="#main"
            className="sr-only rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#3d2c24] focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
          >
            跳转到主要内容
          </a>

          <nav className="flex items-center justify-between rounded-full border border-[#ecd7c8] bg-white/85 px-3 py-2 shadow-[0_12px_34px_-24px_rgba(93,53,32,0.45)] backdrop-blur-md sm:px-5">
            <a className="inline-flex items-center gap-2" href="#top">
              <span className="grid size-9 place-items-center rounded-full bg-[#ff9362] text-base">🐾</span>
              <span className="flex flex-col leading-none">
                <strong className="text-base font-black text-[#4a2c1f]">AI它</strong>
                <small className="text-xs text-[#8d5c44]">智能宠物呵护助手</small>
              </span>
            </a>

            <div className="hidden items-center gap-1 text-sm text-[#6d4d3f] md:flex">
              <a
                href="#value"
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-[#fff2e6] hover:text-[#4a2c1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9d73]"
              >
                价值主张
              </a>
              <a
                href="#features"
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-[#fff2e6] hover:text-[#4a2c1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9d73]"
              >
                核心功能
              </a>
              <a
                href="#scenes"
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-[#fff2e6] hover:text-[#4a2c1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9d73]"
              >
                场景展示
              </a>
              <a
                href="#audience"
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-[#fff2e6] hover:text-[#4a2c1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9d73]"
              >
                适配人群
              </a>
            </div>

            <Button asChild className="h-9 rounded-full bg-[#ff8b59] px-4 text-white hover:bg-[#f37543]">
              <a href="#cta">预约内测</a>
            </Button>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="inline-flex animate-[fade-in-up_680ms_ease-out_both] rounded-full border border-[#f2d3bf] bg-[#fff1e4] px-4 py-1 text-xs font-semibold tracking-[0.14em] text-[#9b5a3a] uppercase">
                专为猫咪与狗狗家庭设计
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {heroTags.map(tag => (
                  <span key={tag} className="rounded-full border border-[#e9cfbf] bg-white/75 px-3 py-1 text-xs font-semibold text-[#8e5f4a]">
                    🐾 {tag}
                  </span>
                ))}
              </div>
              <h1 className="mt-5 animate-[fade-in-up_680ms_ease-out_both] text-balance text-4xl font-black leading-tight text-[#3f261c] [animation-delay:110ms] md:text-5xl lg:text-6xl">
                给猫咪和狗狗的 AI 健康看护助手
              </h1>
              <p className="mt-5 max-w-2xl animate-[fade-in-up_680ms_ease-out_both] text-base leading-7 text-[#7a5948] [animation-delay:220ms] sm:text-lg">
                无论是猫咪躲藏、狗狗频繁吠叫，还是食欲和精神状态变化，AI它都能用拍照、视频和录音快速识别并给出护理建议。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-[#ff8b59] px-7 text-white hover:bg-[#f37543]">
                  <a href="#cta">预约产品内测</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#e5cdb8] bg-white/70 px-7 text-[#6b4a3b] hover:bg-[#fff4ea]"
                >
                  <a href="#scenes">查看演示页面</a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroStats.map(item => (
                  <Card key={item.title} className="border-[#ebd8ca] bg-white/80 py-3 shadow-[0_16px_30px_-24px_rgba(101,62,44,0.45)]">
                    <CardHeader className="px-4 pb-1">
                      <CardTitle className="text-lg text-[#4a2e22]">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pt-0 text-sm leading-6 text-[#7a5a49]">{item.text}</CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[390px] animate-[float_7.6s_ease-in-out_infinite]">
              <div className="relative overflow-hidden rounded-[2.4rem] border border-[#dfc8b4] bg-[#fff1e2] p-3 shadow-[0_38px_90px_-40px_rgba(116,74,45,0.5)]">
                <img
                  src={buddyPhoto}
                  alt="智能小宠陪伴视觉"
                  className="h-[650px] w-full rounded-[1.9rem] object-cover"
                  width={980}
                  height={1600}
                  fetchPriority="high"
                />
                <div className="absolute inset-3 rounded-[1.9rem] bg-gradient-to-b from-[#f6e2cf1f] via-[#5f3f2a33] to-[#2f1b128a]" />

                <div className="absolute inset-x-8 top-8 flex flex-wrap gap-2 text-[11px] font-semibold text-[#4d3326]">
                  <span className="rounded-full border border-[#f3dece] bg-[#fff8f2]/90 px-3 py-1">😺 猫咪情绪识别</span>
                  <span className="rounded-full border border-[#f3dece] bg-[#fff8f2]/90 px-3 py-1">🐶 狗狗行为预警</span>
                  <span className="rounded-full border border-[#f3dece] bg-[#fff8f2]/90 px-3 py-1">🔊 异常叫声提示</span>
                </div>

                <Card className="absolute inset-x-6 bottom-6 border-[#ead4c2] bg-[#fffdf8]/92 py-4 text-[#503325] backdrop-blur-md">
                  <CardHeader className="px-4 pb-2">
                    <CardTitle className="text-lg">给猫咪和狗狗的一站式护理助手</CardTitle>
                    <CardDescription className="text-[#826654]">
                      食欲变差、频繁抓挠、突然低落或异常叫声，都能先得到清晰判断和下一步建议。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 px-4 pt-0">
                    <Button asChild className="h-8 rounded-full bg-[#8bbb77] text-sm text-white hover:bg-[#78a564]">
                      <a href="#features">了解核心能力</a>
                    </Button>
                    <img
                      src={heroShot}
                      alt="AI它首页健康分析界面"
                      className="w-full rounded-xl"
                      width={390}
                      height={844}
                      fetchPriority="high"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10" id="main">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" id="value">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">价值主张</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">从盲目担心到有依据地照护</h2>
            <p className="mt-4 text-base leading-7 text-[#795848]">
              围绕宠物家庭最常见的三类焦虑，AI它将识别、解释和干预串成一个可执行闭环。
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {painCards.map((card, idx) => (
              <Card key={card.title} className={`${valueStyles[idx]} py-4 shadow-[0_16px_34px_-30px_rgba(96,58,38,0.55)]`}>
                <CardHeader className="px-5 pb-1">
                  <CardTitle className="text-xl text-[#4a2d22]">{card.title}</CardTitle>
                  <CardDescription className="text-[#7c5b4b]">{card.detail}</CardDescription>
                </CardHeader>
                <CardContent className="px-5 pt-2 text-sm leading-6 text-[#5f3d2d]">{card.action}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" id="features">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">核心功能</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">AI 能力藏在温和、顺手的日常体验里</h2>
            <p className="mt-4 text-base leading-7 text-[#795848]">覆盖观察、预警、建议与就医协同，减少反复试错。</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(item => (
              <Card key={item} className="border-[#ead6c5] bg-white/80 py-2">
                <CardContent className="px-4 py-3 text-sm font-semibold tracking-wide text-[#644133]">🐾 {item}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" id="scenes">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">场景展示</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">三屏看懂 AI它 的核心产品体验</h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {screens.map(screen => (
              <Card key={screen.title} className="overflow-hidden border-[#e8d4c4] bg-white/85 py-4 shadow-[0_18px_40px_-34px_rgba(102,58,38,0.55)]">
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
                  <CardTitle className="text-xl text-[#4b2f23]">{screen.title}</CardTitle>
                  <CardDescription className="text-[#7b5b4b]">{screen.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" aria-label="疾病追踪闭环">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <Card className="border-[#d9e8cf] bg-[#f5fbee] py-5 text-[#4b3126]">
              <CardHeader className="px-6 pb-2">
                <p className="text-sm font-semibold tracking-[0.12em] text-[#6c9159] uppercase">疾病追踪</p>
                <CardTitle className="text-3xl leading-tight">症状追踪 + 健康管理，构建可追溯闭环</CardTitle>
                <CardDescription className="text-[#6e5a4d]">
                  持续监测行为变化，融合体温、心率、饮食排便与病历信息，形成多维交叉分析和持续提醒。
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-3 px-6 pt-2">
                {loop.map(item => (
                  <Card key={item.step} className="border-[#d8e7d3] bg-white/80 py-4">
                    <CardHeader className="px-4 pb-2">
                      <CardTitle className="text-lg text-[#4c3126]">{item.step}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pt-0 text-sm leading-6 text-[#6f5a4c]">{item.detail}</CardContent>
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

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" id="audience">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">适配人群</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">不同养宠阶段，都能获得匹配支持</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {personas.map((persona, idx) => (
              <Card key={persona.name} className={`${personaStyles[idx]} py-4`}>
                <CardHeader className="px-5">
                  <CardTitle className="text-[#472c20]">{persona.name}</CardTitle>
                  <CardDescription className="text-[#7d5d4c]">{persona.profile}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 px-5 pt-0 text-sm leading-6">
                  <p className="text-[#705547]">{persona.pain}</p>
                  <p className="font-semibold text-[#4f3328]">{persona.gain}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8" id="cta">
          <Card className="border-[#f0d0b8] bg-gradient-to-r from-[#fff2e5] via-[#ffe9dc] to-[#eff9eb] py-8 shadow-[0_32px_70px_-45px_rgba(109,67,43,0.6)]">
            <CardHeader className="px-6 text-center">
              <CardTitle className="text-3xl leading-tight text-[#43291f] md:text-4xl">让 AI它成为你和宠物之间的健康翻译官</CardTitle>
              <CardDescription className="mx-auto max-w-2xl text-base text-[#6f5447]">
                现在预约，优先获取首批内测资格、产品白皮书与商务接入方案。
              </CardDescription>
            </CardHeader>

            <CardContent className="mx-auto w-full max-w-2xl px-6 pt-4">
              <form action="mailto:hello@aita.app" method="post" encType="text/plain" className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="space-y-2 text-left">
                  <Label htmlFor="contact" className="text-[#5d402f]">
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
                    className="h-11 border-[#e8c8b1] bg-white/90 text-[#4d3125] placeholder:text-[#b08a74]"
                  />
                </div>
                <Button type="submit" className="h-11 self-end rounded-full bg-[#ff8b59] px-6 text-white hover:bg-[#f37543]">
                  获取商务与试用方案
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#edd8cb] px-4 py-6 text-center text-sm text-[#8a6552] sm:px-6 lg:px-8">
        🐾 AI它 · 智能宠物呵护助手
      </footer>
    </div>
  );
}

export default App;
