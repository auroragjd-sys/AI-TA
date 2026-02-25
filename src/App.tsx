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
  Activity,
  AlertCircle,
  Cat,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronsDown,
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
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  type CSSProperties,
  type Dispatch,
  type SetStateAction,
} from "react";
import "./index.css";

import dogMonitorShot from "./assets/images/dog-monitor.jpg";
import healthShot from "./assets/images/健康分析.png";
import advisorShot from "./assets/images/健康顾问.png";
import traceShotA from "./assets/images/追踪1.png";
import traceShotB from "./assets/images/追踪2.png";
import heroShot from "./assets/images/首页.png";
import healthAnalysisVideo from "./assets/videos/健康分析.mp4";
import audioRecognitionVideo from "./assets/videos/录音识别声音.mp4";
import emotionRecognitionVideo from "./assets/videos/拍照识别情绪.mp4";
import smartQaVideo from "./assets/videos/智能问答.mp4";
import behaviorRecognitionVideo from "./assets/videos/视频行为.mp4";

const painCards = [
  {
    title: "异常看不懂",
    detail: "宠物不会说话，轻微行为变化常被忽略或误读。",
    action: "AI 拍照、视频、录音识别联动，快速给出可执行判断。",
    icon: ScanLine,
    color: "text-[#ff8b59]",
    bg: "bg-[#fff9f3]",
    border: "border-[#f2d8c7]",
    iconBg: "bg-[#ffe8d6]",
  },
  {
    title: "老病难区分",
    detail: "衰老现象和疾病信号容易混淆，决策依赖经验。",
    action: "健康基准线结合情绪热力图，持续比对风险趋势。",
    icon: Activity,
    color: "text-[#10b981]",
    bg: "bg-[#f4fbef]",
    border: "border-[#d9e9cf]",
    iconBg: "bg-[#e1f5e9]",
  },
  {
    title: "就医决策重",
    detail: "信息不完整时就诊容易走弯路，成本和焦虑同步放大。",
    action: "症状追踪 + 病历管理 + 医生推荐，形成闭环决策链路。",
    icon: Hospital,
    color: "text-[#0ea5e9]",
    bg: "bg-[#f0f9ff]",
    border: "border-[#cfe8f6]",
    iconBg: "bg-[#e0f2fe]",
  },
];

const heroTags = [
  { text: "猫咪情绪识别", icon: Cat },
  { text: "狗狗行为预警", icon: Dog },
  { text: "异常叫声提示", icon: Mic },
];

type HeroCarouselSlide = {
  phase: string;
  title: string;
  description: string;
  videoSrc: string;
};

type PhoneScene = "hero" | "chapter1" | "chapter2" | "value";

const heroCarouselSlides: HeroCarouselSlide[] = [
  {
    phase: "拍照识别情绪",
    title: "通过面部与体态识别，快速判断宠物当下情绪",
    description:
      "对应视频展示拍照后自动分析耳位、眼神和姿态，帮助你第一时间判断是否需要干预。",
    videoSrc: emotionRecognitionVideo,
  },
  {
    phase: "视频行为识别",
    title: "连续追踪动作轨迹，识别潜在异常行为",
    description:
      "对应视频展示 AI 对走动、抓挠和停留状态的连续识别，方便判断是短时波动还是持续异常。",
    videoSrc: behaviorRecognitionVideo,
  },
  {
    phase: "录音识别声音",
    title: "识别叫声频段变化，提前发现高风险信号",
    description:
      "对应视频展示录音样本自动分类与风险提示，让异常叫声更早被注意到。",
    videoSrc: audioRecognitionVideo,
  },
  {
    phase: "健康分析",
    title: "将多模态结果汇总，形成可读的健康洞察",
    description:
      "对应视频展示评分、趋势和关键指标的联动分析，帮助你快速掌握整体状态。",
    videoSrc: healthAnalysisVideo,
  },
  {
    phase: "智能问答",
    title: "结合历史记录对话问诊，快速得到行动建议",
    description:
      "对应视频展示围绕症状与历史数据的智能问答流程，减少重复描述成本。",
    videoSrc: smartQaVideo,
  },
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
    hoverBgColor: "group-hover:bg-[#059669]", // med-green-dark
    iconHoverColor: "group-hover:text-[#d1fae5]", // light green
  },
  {
    label: "兽医专家顾问团",
    value: "50+",
    icon: UserRoundCheck,
    color: "text-[var(--tech-blue-dark)]",
    bgColor: "bg-[#0ea5e9]/10", // var(--tech-blue)
    hoverBgColor: "group-hover:bg-[#0284c7]", // tech-blue-dark
    iconHoverColor: "group-hover:text-[#e0f2fe]", // light blue
  },
  {
    label: "AI 训练数据集",
    value: "1000万+",
    icon: Database,
    color: "text-[var(--tech-blue-dark)]",
    bgColor: "bg-[#0ea5e9]/10", // var(--tech-blue)
    hoverBgColor: "group-hover:bg-[#0284c7]", // tech-blue-dark
    iconHoverColor: "group-hover:text-[#e0f2fe]", // light blue
  },
  {
    label: "准确率验证",
    value: "98.5%",
    icon: ShieldCheck,
    color: "text-[var(--med-green-dark)]",
    bgColor: "bg-[#10b981]/10", // var(--med-green)
    hoverBgColor: "group-hover:bg-[#059669]", // med-green-dark
    iconHoverColor: "group-hover:text-[#d1fae5]", // light green
  },
];

const personaStyles = [
  "border-[#f2d8c7] bg-[#fff9f4]",
  "border-[#d6e7d4] bg-[#f4fbf5]",
  "border-[#e7d8f2] bg-[#faf6ff]",
];

type StoryChapter = {
  id: string;
  phase: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    hoverBgColor?: string;
    iconHoverColor?: string;
  }[];
};

const storyChapters: StoryChapter[] = [
  {
    id: "proof",
    phase: "第二章节",
    title: "专业数据与兽医监制，只为更精准的判断",
    description: "滚动查看核心背书，手机动效会在本章节中持续保持联动。",
    metrics: endorsements,
  },
];

function FullscreenStory({
  chapters,
  onEntryProgressChange,
}: {
  chapters: StoryChapter[];
  onEntryProgressChange?: (progress: number) => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const entryRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [entryProgress, setEntryProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const entry = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / window.innerHeight),
      );
      const travel = rect.height - window.innerHeight;
      if (travel <= 0) {
        setProgress(0);
        if (Math.abs(entryRef.current - entry) >= 0.001) {
          entryRef.current = entry;
          setEntryProgress(entry);
          onEntryProgressChange?.(entry);
        }
        return;
      }
      const next = Math.min(1, Math.max(0, -rect.top / travel));

      setProgress((prev) => (Math.abs(prev - next) < 0.001 ? prev : next));
      if (Math.abs(entryRef.current - entry) >= 0.001) {
        entryRef.current = entry;
        setEntryProgress(entry);
        onEntryProgressChange?.(entry);
      }
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [onEntryProgressChange]);

  const activeIndex = useMemo(() => {
    if (!chapters.length) {
      return 0;
    }
    return Math.min(
      chapters.length - 1,
      Math.floor(progress * chapters.length),
    );
  }, [chapters.length, progress]);

  const activeChapter = chapters[activeIndex];
  if (!activeChapter) {
    return null;
  }

  const sceneStyle = {
    "--scene-entry": `${entryProgress}`,
  } as CSSProperties;

  return (
    <section
      className="fullscreen-story snap-start snap-always"
      id="proof"
      aria-label="章节全屏过渡动画"
      ref={sectionRef}
    >
      <div className="fullscreen-story__sticky" style={sceneStyle}>
        <div className="fullscreen-story__content">
          <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">
            {activeChapter.phase}
          </p>
          <h2 className="font-rounded-chinese mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">
            {activeChapter.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#593828]">
            {activeChapter.description}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag.text}
                className="inline-flex items-center gap-1 rounded-full border border-[#e6ccb8] bg-white/75 px-3 py-1 text-xs font-semibold text-[#6b4a36]"
              >
                <tag.icon className="size-3.5 text-[#ff8b59]" />
                {tag.text}
              </span>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            {activeChapter.metrics.map((item) => {
              const hoverBgColor =
                item.hoverBgColor || "group-hover:bg-gray-100";
              const iconHoverColor =
                item.iconHoverColor || "group-hover:text-white";
              return (
                <div
                  className="group rounded-2xl border border-[#ead8ca] bg-white/80 px-3 py-3 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-soft-lg"
                  key={item.label}
                >
                  <div
                    className={`mx-auto mb-2 flex size-10 items-center justify-center rounded-xl transition-all duration-300 ${item.bgColor} ${item.color} ${hoverBgColor} ${iconHoverColor} group-hover:shadow-md`}
                  >
                    <item.icon className="size-5 transition-transform duration-500 group-hover:scale-110 group-hover:animate-[jiggle_0.5s_ease-in-out_both]" />
                  </div>
                  <div className={`text-xl font-black ${item.color}`}>
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-[#6d4c34] sm:text-sm">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>

          {chapters.length > 1 ? (
            <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
              {chapters.map((chapter, idx) => (
                <span
                  className={`h-1.5 rounded-full transition-all ${
                    idx === activeIndex
                      ? "w-8 bg-[#ff8b59]"
                      : "w-3 bg-[#ebd7c7]"
                  }`}
                  key={chapter.id}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type PhonePose = {
  x: number;
  y: number;
  width: number;
  rotate: number;
  opacity: number;
};

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

type LayoutRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function rectFromDomRect(rect: DOMRect): LayoutRect {
  return {
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height,
  };
}

function lowerCenterRect(
  rect: LayoutRect,
  visibleHeightRatio: number,
): LayoutRect {
  const ratio = clamp(visibleHeightRatio, 0, 1);
  const visibleHeight = rect.height * ratio;

  return {
    x: (window.innerWidth - rect.width) / 2,
    y: window.innerHeight - visibleHeight,
    width: rect.width,
    height: rect.height,
  };
}

function readCssNumber(name: string) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  const value = Number.parseFloat(raw);

  return Number.isFinite(value) ? value : 0;
}

function valueTransitionProgress(rect: LayoutRect) {
  const startTop = window.innerHeight;
  const endTop = (window.innerHeight - rect.height) / 2;

  if (startTop === endTop) {
    return rect.y <= endTop ? 1 : 0;
  }

  return clamp((startTop - rect.y) / (startTop - endTop), 0, 1);
}

function HeroCopyCarousel({
  activeIndex,
  onActiveIndexChange,
}: {
  activeIndex: number;
  onActiveIndexChange: Dispatch<SetStateAction<number>>;
}) {
  const goToSlide = (index: number) => {
    const length = heroCarouselSlides.length;
    onActiveIndexChange(((index % length) + length) % length);
  };

  return (
    <div className="mx-auto w-full max-w-xl lg:mx-0">
      <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">
        第一章节
      </p>
      <h2 className="font-rounded-chinese mt-3 text-3xl font-bold leading-tight text-[#3f261c] md:text-4xl">
        多模态视频演示，逐步看懂宠物健康信号
      </h2>
      <p className="mt-4 max-w-lg text-base leading-7 text-[#593828]">
        左侧 Carousel 的标题与说明会和右侧视频播放器同步切换，帮助你快速理解每个能力场景。
      </p>

      <div className="hero-copy-carousel__viewport mt-7">
        <div
          className="hero-copy-carousel__track"
          style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
        >
          {heroCarouselSlides.map((slide) => (
            <article className="hero-copy-carousel__slide" key={slide.title}>
              <p className="text-xs font-semibold tracking-[0.12em] text-[#b06f4a] uppercase">
                {slide.phase}
              </p>
              <h3 className="font-rounded-chinese mt-3 text-2xl font-bold leading-tight text-[#3f261c]">
                {slide.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f3e2d] sm:text-base">
                {slide.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hero-copy-carousel__nav-btn"
            onClick={() => goToSlide(activeIndex - 1)}
            aria-label="上一条说明"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            className="hero-copy-carousel__nav-btn"
            onClick={() => goToSlide(activeIndex + 1)}
            aria-label="下一条说明"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="flex items-center gap-2" role="tablist" aria-label="视频内容轮播">
          {heroCarouselSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              role="tab"
              aria-label={`切换到第 ${index + 1} 条`}
              aria-selected={index === activeIndex}
              className={`hero-copy-carousel__dot ${
                index === activeIndex
                  ? "hero-copy-carousel__dot--active"
                  : "hero-copy-carousel__dot--idle"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function fitRectToViewport(
  rect: LayoutRect,
  minVisibleHeightRatio: number,
): LayoutRect {
  const widthScale = rect.width > 0 ? window.innerWidth / rect.width : 1;
  const heightScale = rect.height > 0 ? window.innerHeight / rect.height : 1;
  const scale = Math.min(1, widthScale, heightScale);
  const width = rect.width * scale;
  const height = rect.height * scale;
  const ratio = clamp(minVisibleHeightRatio, 0, 1);
  const minVisibleHeight = height * ratio;
  const x = clamp(rect.x, 0, Math.max(0, window.innerWidth - width));
  const y = clamp(
    rect.y,
    minVisibleHeight - height,
    window.innerHeight - minVisibleHeight,
  );

  return { x, y, width, height };
}

function HeroPhoneDashboard() {
  return (
    <div className="flex h-full flex-col bg-[#fff9f4] pt-7">
      <div className="flex items-center justify-between px-6 pt-6 pb-2">
        <div>
          <div className="text-xs text-[#8c6b5d]">下午 2:30</div>
          <div className="text-lg font-bold text-[#3d2c24]">今日健康</div>
        </div>
        <div className="size-8 rounded-full bg-[#ffd6bb]" />
      </div>

      <div className="mx-4 mt-2 rounded-3xl bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#8c6b5d]">综合评分</span>
          <span className="rounded-full bg-[#e6f4e2] px-2 py-0.5 text-xs font-bold text-[#4c8b3e]">
            状态良好
          </span>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <span className="text-5xl font-black text-[#3d2c24]">85</span>
          <span className="mb-1.5 text-sm text-[#8c6b5d]">/ 100</span>
        </div>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#f0f0f0]">
          <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-[#ffcfb5] to-[#ff9362]" />
        </div>
      </div>

      <div className="group mx-4 mt-4 cursor-pointer overflow-hidden rounded-2xl bg-white shadow-soft transition-transform hover:scale-[1.02]">
        <div className="relative aspect-[16/9]">
          <img
            src={dogMonitorShot}
            alt="智能小宠"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md">
            <div className="size-1.5 animate-pulse rounded-full bg-[#4c8b3e]" />
            <span className="text-[10px] font-bold tracking-wide text-white">LIVE</span>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 pb-6 pt-12">
            <div className="flex items-end justify-between text-white">
              <div>
                <div className="mb-1 text-[10px] font-medium opacity-90">
                  当前状态
                </div>
                <div className="text-sm font-bold leading-normal">安静休息中</div>
              </div>
              <div className="flex gap-4 text-right">
                <div>
                  <div className="mb-1 text-[10px] font-medium opacity-90">
                    情绪
                  </div>
                  <div className="text-xs font-bold leading-normal">平稳</div>
                </div>
                <div>
                  <div className="mb-1 text-[10px] font-medium opacity-90">
                    活跃度
                  </div>
                  <div className="text-xs font-bold leading-normal">中等</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 flex-1 rounded-t-3xl bg-white p-6 shadow-soft">
        <div className="mb-4 text-sm font-bold text-[#3d2c24]">实时监测记录</div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-[#ff9362]" />
            <div>
              <div className="text-sm font-medium text-[#3d2c24]">
                检测到异常叫声
              </div>
              <div className="text-xs text-[#8c6b5d]">14:20 · 持续 15秒 · 建议关注</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-[#d8efcf]" />
            <div>
              <div className="text-sm font-medium text-[#3d2c24]">进食记录</div>
              <div className="text-xs text-[#8c6b5d]">12:30 · 摄入 45g · 正常</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SharedPhone({
  activeSlide,
  scene,
  onVideoEnded,
}: {
  activeSlide: HeroCarouselSlide;
  scene: PhoneScene;
  onVideoEnded?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (scene !== "chapter1") {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = 0;
    const playback = video.play();

    if (playback) {
      playback.catch(() => {});
    }
  }, [activeSlide.videoSrc, scene]);

  const sceneImage = useMemo(() => {
    switch (scene) {
      case "value":
        return {
          src: advisorShot,
          alt: "健康顾问页面",
        };
      default:
        return {
          src: healthShot,
          alt: "健康分析页面",
        };
    }
  }, [scene]);

  return (
    <div className="shared-phone">
      <div className="shared-phone__notch" />
      {scene === "chapter1" ? (
        <div className="shared-phone__video-layout">
          <div className="shared-phone__video-header">
            <span className="shared-phone__video-header-label">章节 1 演示</span>
            <span className="shared-phone__video-header-chip">
              {activeSlide.phase}
            </span>
          </div>
          <div className="shared-phone__video-frame">
            <video
              ref={videoRef}
              key={activeSlide.videoSrc}
              src={activeSlide.videoSrc}
              className="shared-phone__video"
              autoPlay
              muted
              playsInline
              preload="metadata"
              onEnded={onVideoEnded}
            />
            <div className="shared-phone__video-overlay" aria-hidden="true">
              <span className="shared-phone__video-overlay-dot" />
              <span>正在播放</span>
            </div>
          </div>
        </div>
      ) : scene === "hero" ? (
        <HeroPhoneDashboard />
      ) : (
        <div className="shared-phone__image-layout">
          <img
            src={sceneImage.src}
            alt={sceneImage.alt}
            className="shared-phone__image-screen"
          />
        </div>
      )}
    </div>
  );
}

export function App() {
  const [storyEntry, setStoryEntry] = useState(0);
  const [heroCarouselIndex, setHeroCarouselIndex] = useState(0);
  const [phoneScene, setPhoneScene] = useState<PhoneScene>("hero");
  const heroPhoneAnchorRef = useRef<HTMLDivElement>(null);
  const heroCarouselPhoneAnchorRef = useRef<HTMLDivElement>(null);
  const valuePhoneAnchorRef = useRef<HTMLDivElement>(null);
  const [phonePose, setPhonePose] = useState<PhonePose>({
    x: 0,
    y: 0,
    width: 0,
    rotate: 0,
    opacity: 0,
  });

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("snap-y", "snap-mandatory");
    body.classList.add("snap-y", "snap-mandatory");

    return () => {
      html.classList.remove("snap-y", "snap-mandatory");
      body.classList.remove("snap-y", "snap-mandatory");
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const heroDomRect = heroPhoneAnchorRef.current?.getBoundingClientRect();

      if (
        !heroDomRect ||
        heroDomRect.width <= 0 ||
        heroDomRect.height <= 0
      ) {
        return;
      }

      const storyProgress = clamp(storyEntry, 0, 1);
      const heroRect = rectFromDomRect(heroDomRect);
      const storyVisibleHeightRatio = clamp(
        readCssNumber("--shared-phone-story-visible-height-ratio"),
        0,
        1,
      );
      const storyRect = lowerCenterRect(heroRect, storyVisibleHeightRatio);

      let x = heroRect.x;
      let y = heroRect.y;
      let width = heroRect.width;
      let height = heroRect.height;
      let rotate = readCssNumber("--shared-phone-entry-rotate");

      const heroCarouselDomRect =
        heroCarouselPhoneAnchorRef.current?.getBoundingClientRect();
      const heroCarouselRect = heroCarouselDomRect
        ? rectFromDomRect(heroCarouselDomRect)
        : undefined;
      const carouselProgress = heroCarouselRect
        ? valueTransitionProgress(heroCarouselRect)
        : 0;

      if (heroCarouselRect && carouselProgress > 0) {
        const targetX = heroCarouselRect.x + (heroCarouselRect.width - width) / 2;
        const targetY =
          heroCarouselRect.y + (heroCarouselRect.height - height) / 2;
        x = lerp(x, targetX, carouselProgress);
        y = lerp(y, targetY, carouselProgress);
        rotate = lerp(rotate, 0, carouselProgress);
      }

      if (storyProgress > 0) {
        const targetX = storyRect.x + (storyRect.width - width) / 2;
        const targetY = storyRect.y + (storyRect.height - height) / 2;
        x = lerp(x, targetX, storyProgress);
        y = lerp(y, targetY, storyProgress);
        rotate = lerp(rotate, 0, storyProgress);
      }

      const valueDomRect = valuePhoneAnchorRef.current?.getBoundingClientRect();
      const valueRect = valueDomRect
        ? rectFromDomRect(valueDomRect)
        : undefined;
      const valueProgress = valueRect ? valueTransitionProgress(valueRect) : 0;

      let opacity = 0;

      if (valueRect && valueProgress > 0) {
        const targetX = valueRect.x + (valueRect.width - width) / 2;
        const targetY = valueRect.y + (valueRect.height - height) / 2;
        x = lerp(x, targetX, valueProgress);
        y = lerp(y, targetY, valueProgress);
        rotate = lerp(rotate, 0, valueProgress);
      }

      ({ x, y, width, height } = fitRectToViewport({
        x,
        y,
        width,
        height,
      }, storyVisibleHeightRatio));

      const viewportCenter = window.innerHeight / 2;
      const candidates: { id: string; scene: PhoneScene }[] = [
        { id: "top", scene: "hero" },
        { id: "intro-carousel", scene: "chapter1" },
        { id: "proof", scene: "chapter2" },
        { id: "value", scene: "value" },
      ];
      let closestScene: PhoneScene = "hero";
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const candidate of candidates) {
        const element = document.getElementById(candidate.id);
        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();
        if (rect.height <= 0) {
          continue;
        }

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestScene = candidate.scene;
        }
      }

      setPhoneScene((prev) => (prev === closestScene ? prev : closestScene));

      const visible =
        width > 0 &&
        height > 0 &&
        x < window.innerWidth &&
        x + width > 0 &&
        y < window.innerHeight &&
        y + height > 0;

      opacity = visible ? 1 : 0;

      setPhonePose((prev) => {
        if (
          Math.abs(prev.x - x) < 0.5 &&
          Math.abs(prev.y - y) < 0.5 &&
          Math.abs(prev.width - width) < 0.5 &&
          Math.abs(prev.rotate - rotate) < 0.15 &&
          Math.abs(prev.opacity - opacity) < 0.01
        ) {
          return prev;
        }

        return { x, y, width, rotate, opacity };
      });
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [storyEntry]);

  const scrollHintOpacity = Math.max(0, 1 - storyEntry * 10);
  const scrollHintOffset = Math.min(14, storyEntry * 26);

  const handleVideoEnded = useCallback(() => {
    setHeroCarouselIndex((prev) => (prev + 1) % heroCarouselSlides.length);
  }, []);

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

      <div
        aria-hidden="true"
        className="shared-phone-shell"
        style={{
          width: `${phonePose.width}px`,
          opacity: phonePose.opacity,
          transform: `translate3d(${phonePose.x}px, ${phonePose.y}px, 0) rotate(${phonePose.rotate}deg)`,
        }}
      >
        <div
          className={
            storyEntry < 0.02 ? "animate-[float_6s_ease-in-out_infinite]" : ""
          }
        >
          <SharedPhone
            activeSlide={
              heroCarouselSlides[heroCarouselIndex] ?? heroCarouselSlides[0]
            }
            scene={phoneScene}
            onVideoEnded={handleVideoEnded}
          />
        </div>
      </div>

      <header
        className="relative z-10 flex min-h-screen snap-start snap-always flex-col justify-center"
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
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e6cbb0] bg-gradient-to-r from-white/80 to-[#fff4ea]/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#7b4a2a] shadow-soft backdrop-blur-md animate-[fade-in-up_680ms_ease-out_both]">
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

              <h1 className="font-rounded-chinese mt-8 animate-[fade-in-up_680ms_ease-out_both] text-balance text-4xl font-black tracking-wider leading-tight text-[#3f261c] drop-shadow-sm [animation-delay:110ms] md:text-5xl lg:text-6xl">
                别让
                <span className="relative mx-1 whitespace-nowrap">
                  <span className="relative z-10">“再观察一下”</span>
                  <span className="absolute bottom-[0.15em] left-0 -z-10 h-[0.35em] w-full -rotate-1 rounded-sm bg-[#ffd6bb] opacity-90" />
                </span>
                <br />
                错过
                <span className="bg-gradient-to-r from-[#ff8b59] to-[#ff5b2e] bg-clip-text text-transparent">
                  最佳救治时机
                </span>
              </h1>
              <p className="mt-8 max-w-2xl animate-[fade-in-up_680ms_ease-out_both] text-lg font-medium leading-8 text-[#5a3928] [animation-delay:220ms] sm:text-xl">
                猫咪躲藏、狗狗频繁舔舐...这些不仅是情绪，更是
                <span className="font-bold text-[#7b4a2a] underline decoration-[#ff8b59]/40 underline-offset-4">
                  求救信号
                </span>
                。
                <br />
                <span className="font-bold text-[#ff8b59]">AI它 APP</span>
                通过音视频多模态分析，
                <span className="font-bold text-[#7b4a2a]">实时解读</span>
                异常行为，让爱不留遗憾。
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
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#fffcf7] text-[#ff8b59] shadow-soft ring-1 ring-[#ebdccf] transition-transform group-hover:scale-110">
                    <ScanLine className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-[#5a3a29]">
                    多模态识别
                  </span>
                </div>
                <div className="hidden h-8 w-px bg-[#ebd8ca] sm:block" />
                <div className="group flex items-center gap-2">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#fffcf7] text-[#ff8b59] shadow-soft ring-1 ring-[#ebdccf] transition-transform group-hover:scale-110">
                    <AlertCircle className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-[#5a3a29]">
                    异常行为预警
                  </span>
                </div>
                <div className="hidden h-8 w-px bg-[#ebd8ca] sm:block" />
                <div className="group flex items-center gap-2">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#fffcf7] text-[#ff8b59] shadow-soft ring-1 ring-[#ebdccf] transition-transform group-hover:scale-110">
                    <TrendingUp className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-[#5a3a29]">
                    健康趋势追踪
                  </span>
                </div>
                <div className="hidden h-8 w-px bg-[#ebd8ca] sm:block" />
                <div className="group flex items-center gap-2">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#fffcf7] text-[#ff8b59] shadow-soft ring-1 ring-[#ebdccf] transition-transform group-hover:scale-110">
                    <Stethoscope className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-[#5a3a29]">
                    医生辅助决策
                  </span>
                </div>
              </div>
            </div>

            <div
              className="hero-phone-anchor mx-auto"
              ref={heroPhoneAnchorRef}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center sm:bottom-8">
          <a
            href="#intro-carousel"
            className="hero-scroll-hint pointer-events-auto inline-flex flex-col items-center gap-1 text-sm font-semibold text-[#734b39]"
            aria-label="向下滚动查看详细内容"
            style={{
              opacity: scrollHintOpacity,
              transform: `translateY(${scrollHintOffset}px)`,
              pointerEvents: scrollHintOpacity < 0.12 ? "none" : "auto",
            }}
          >
            <span className="hero-scroll-hint__mouse" aria-hidden="true">
              <span className="hero-scroll-hint__wheel" />
            </span>
            <span className="hero-scroll-hint__text">向下滚动，继续查看</span>
            <ChevronsDown className="hero-scroll-hint__arrow size-4 text-[#ff8b59]" />
          </a>
        </div>
      </header>

      <main className="relative z-10" id="main">
        <section
          className="mx-auto flex min-h-screen max-w-6xl snap-start snap-always flex-col justify-center px-4 py-20 sm:px-6 lg:box-border lg:h-screen lg:px-8 lg:py-0"
          id="intro-carousel"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="flex w-full justify-center lg:justify-end">
              <HeroCopyCarousel
                activeIndex={heroCarouselIndex}
                onActiveIndexChange={setHeroCarouselIndex}
              />
            </div>
            <div className="flex w-full justify-center lg:justify-center">
              <div
                className="hero-carousel-phone-anchor"
                ref={heroCarouselPhoneAnchorRef}
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        <FullscreenStory
          chapters={storyChapters}
          onEntryProgressChange={setStoryEntry}
        />

        <section
          className="mx-auto min-h-screen max-w-7xl snap-start snap-always px-4 pt-24 pb-12 sm:px-6 lg:box-border lg:flex lg:h-screen lg:flex-col lg:justify-center lg:px-8 lg:py-0"
          id="value"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Phone on the left */}
            <div className="flex w-full justify-center lg:w-1/3 lg:justify-end">
              <div 
                className="value-phone-anchor"
                ref={valuePhoneAnchorRef}
              />
            </div>

            {/* Content on the right */}
            <div className="w-full lg:w-2/3">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">
                  价值主张
                </p>
                <h2 className="font-rounded-chinese mt-2 text-3xl font-bold text-[#3f261c] md:text-4xl">
                  从盲目担心到有依据地照护
                </h2>
                <p className="mt-3 text-base leading-7 text-[#593828]">
                  围绕宠物家庭最常见的三类焦虑，AI它将识别、解释和干预串成一个可执行闭环。
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {painCards.map((card) => (
                  <Card
                    key={card.title}
                    className={`group relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${card.bg} ${card.border}`}
                  >
                    <CardHeader className="relative z-10 px-5 pb-2 pt-5">
                      <div
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg} ${card.color}`}
                      >
                        <card.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="font-rounded-chinese text-lg font-bold text-[#3f261c]">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="mt-1.5 text-sm text-[#5c3b2b] line-clamp-2">
                        {card.detail}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 px-5 pb-5 pt-1">
                      <div className="mt-1 rounded-lg bg-white/50 p-2.5 text-xs font-medium leading-relaxed text-[#5a3928] backdrop-blur-sm">
                        {card.action}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="mx-auto min-h-screen max-w-6xl snap-start snap-always px-4 py-24 sm:px-6 lg:box-border lg:flex lg:h-screen lg:flex-col lg:justify-center lg:px-8 lg:py-12"
          id="features"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">
              核心功能
            </p>
            <h2 className="font-rounded-chinese mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">
              AI 能力藏在温和、顺手的日常体验里
            </h2>
            <p className="mt-4 text-base leading-7 text-[#593828]">
              覆盖观察、预警、建议与就医协同，减少反复试错。
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <Card key={item} className="border-[#ebd8ca] bg-white/90 py-2 shadow-soft transition-all hover:shadow-soft-lg">
                <CardContent className="flex items-center gap-2 px-4 py-3 text-sm font-semibold tracking-wide text-[#442113]">
                  <CheckCircle2 className="size-4 text-[#ff8b59]" />
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          className="mx-auto min-h-screen max-w-6xl snap-start snap-always px-4 py-24 sm:px-6 lg:box-border lg:flex lg:h-screen lg:flex-col lg:justify-center lg:px-8 lg:py-12"
          id="scenes"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">
              场景展示
            </p>
            <h2 className="font-rounded-chinese mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">
              三屏看懂 AI它 的核心产品体验
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {screens.map((screen) => (
              <Card
                key={screen.title}
                className="overflow-hidden border-[#ebd8ca] bg-white/90 py-4 shadow-soft-lg transition-transform hover:-translate-y-1"
              >
                <CardContent className="px-5 pt-1">
                  <img
                    src={screen.image}
                    alt={screen.alt}
                    className="h-[430px] w-full rounded-2xl object-cover lg:h-[320px] xl:h-[430px]"
                    width={390}
                    height={844}
                    loading="lazy"
                  />
                </CardContent>
                <CardHeader className="px-5 pt-0">
                  <CardTitle className="font-rounded-chinese text-xl text-[#4b2f23]">
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
          className="mx-auto min-h-screen max-w-6xl snap-start snap-always px-4 py-24 sm:px-6 lg:box-border lg:flex lg:h-screen lg:flex-col lg:justify-center lg:px-8 lg:py-12"
          aria-label="疾病追踪闭环"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <Card className="border-[#ebd8ca] bg-gradient-to-br from-[#fffcf9] to-[#fff6f0] py-8 shadow-soft-lg text-[#4b3126]">
              <CardHeader className="px-6 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#e0f2fe] text-[#0284c7]">
                    <Stethoscope className="size-5" />
                  </span>
                  <p className="text-sm font-bold tracking-[0.08em] text-[#0284c7] uppercase">
                    疾病追踪
                  </p>
                </div>
                <CardTitle className="font-rounded-chinese text-3xl leading-tight text-[#3f261c]">
                  症状追踪 + 健康管理
                  <br />
                  <span className="text-2xl text-[#7b5a48] opacity-90">构建可追溯闭环</span>
                </CardTitle>
                <CardDescription className="mt-3 text-base leading-relaxed text-[#5d3d2d]">
                  持续监测行为变化，融合体温、心率、饮食排便与病历信息，形成多维交叉分析和持续提醒。
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-4 px-6 pt-2">
                {loop.map((item, index) => (
                  <div key={item.step} className="relative">
                    {/* Timeline line */}
                    {index !== loop.length - 1 && (
                      <div className="absolute left-[11px] top-8 h-full w-0.5 bg-[#e5e7eb]" />
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e0f2fe] ring-4 ring-white">
                        <div className="size-2 rounded-full bg-[#0ea5e9]" />
                      </div>
                      
                      <div className="flex-1 rounded-xl border border-[#ebd8ca] bg-white/60 px-4 py-3 shadow-sm transition-all hover:bg-white hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <h4 className="font-rounded-chinese text-lg font-bold text-[#3f261c]">
                            {item.step}
                          </h4>
                        </div>
                        <p className="mt-1 text-sm leading-6 text-[#6b4a36]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <Card className="overflow-hidden border-[#ebd8ca] bg-white/90 py-4 shadow-soft-lg transition-transform hover:-translate-y-1">
                <CardContent className="px-4 py-2">
                  <img
                    src={traceShotA}
                    alt="症状模板化录入界面"
                    className="h-[360px] w-full rounded-2xl object-cover lg:h-[240px] xl:h-[320px]"
                    width={390}
                    height={844}
                    loading="lazy"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-[#ebd8ca] bg-white/90 py-4 shadow-soft-lg transition-transform hover:-translate-y-1">
                <CardContent className="px-4 py-2">
                  <img
                    src={traceShotB}
                    alt="护理记录和报警节点界面"
                    className="h-[360px] w-full rounded-2xl object-cover lg:h-[240px] xl:h-[320px]"
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
          className="mx-auto min-h-screen max-w-6xl snap-start snap-always px-4 py-24 sm:px-6 lg:box-border lg:flex lg:h-screen lg:flex-col lg:justify-center lg:px-8 lg:py-12"
          id="audience"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#9c5f3f] uppercase">
              适配人群
            </p>
            <h2 className="font-rounded-chinese mt-3 text-3xl font-bold text-[#3f261c] md:text-4xl">
              不同养宠阶段，都能获得匹配支持
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {personas.map((persona, idx) => (
              <Card key={persona.name} className={`${personaStyles[idx]} py-4 shadow-sm hover:shadow-soft-lg transition-all duration-300`}>
                <CardHeader className="px-5">
                  <CardTitle className="font-rounded-chinese text-[#472c20]">
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
          className="min-h-screen snap-start snap-always pt-12 pb-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:pt-6 lg:pb-0"
          id="cta"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:flex lg:flex-1 lg:items-center lg:px-8">
            <Card className="w-full border-[#f0d0b8] bg-gradient-to-br from-[#fffbf7] via-[#fff4eb] to-[#ffe8d6] py-10 shadow-soft-xl lg:py-8">
              <CardHeader className="px-6 text-center">
                <CardTitle className="font-rounded-chinese text-3xl leading-tight text-[#3f261c] md:text-4xl">
                  让 AI它成为你和宠物之间的健康翻译官
                </CardTitle>
                <CardDescription className="mx-auto mt-2 max-w-2xl text-lg text-[#5d4037]">
                  现在预约，优先获取首批内测资格、产品白皮书与商务接入方案。
                </CardDescription>
              </CardHeader>

              <CardContent className="mx-auto w-full max-w-xl px-6 pt-6">
                <form
                  action="mailto:hello@aita.app"
                  method="post"
                  encType="text/plain"
                  className="flex flex-col gap-4 sm:flex-row sm:items-end"
                >
                  <div className="flex-1 space-y-2 text-left">
                    <Label htmlFor="contact" className="text-base font-medium text-[#4a2e24]">
                      联系邮箱
                    </Label>
                    <Input
                      id="contact"
                      name="邮箱"
                      type="email"
                      autoComplete="email"
                      spellCheck={false}
                      required
                      placeholder="name@example.com"
                      className="h-12 rounded-full border-[#e6ccb3] bg-white px-6 text-base text-[#4d3125] placeholder:text-[#9ca3af] focus-visible:ring-[#ff8b59]"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 shrink-0 rounded-full bg-[#ff8b59] px-8 text-base font-semibold text-white shadow-lg shadow-orange-200 transition-transform hover:bg-[#f37543] hover:shadow-orange-300 active:scale-95"
                  >
                    <Send className="mr-2 size-5" />
                    获取方案
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <footer className="relative z-10 mt-6 border-t border-[#e9d7ca] bg-white/72 backdrop-blur-sm lg:mt-4">
            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-4">
              <div className="grid gap-6 border-b border-[#efdfd3] pb-4 md:grid-cols-[1.25fr_1fr_1fr]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9362] to-[#ff7a45] text-white shadow-sm">
                      <PawPrint className="size-5" />
                    </span>
                    <span className="text-lg font-black tracking-wide text-[#43291f]">
                      AI它
                    </span>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-[#5a3928]">
                    为宠物家庭提供多模态健康监测、风险预警与就医协同服务，帮助用户在关键时刻做出更稳妥的照护决策。
                  </p>
                  <p className="text-xs leading-5 text-[#7b5a48]">
                    温馨提示：平台建议仅用于辅助判断，不替代专业兽医的线下诊疗意见。
                  </p>
                </div>

                <div>
                  <h3 className="font-rounded-chinese text-sm font-bold tracking-[0.08em] text-[#7b4a2a] uppercase">
                    产品导航
                  </h3>
                  <div className="mt-4 space-y-2 text-sm text-[#5d3d2d]">
                    <a
                      href="#value"
                      className="block transition-colors hover:text-[#3f261c]"
                    >
                      价值主张
                    </a>
                    <a
                      href="#features"
                      className="block transition-colors hover:text-[#3f261c]"
                    >
                      核心功能
                    </a>
                    <a
                      href="#scenes"
                      className="block transition-colors hover:text-[#3f261c]"
                    >
                      场景展示
                    </a>
                    <a
                      href="#audience"
                      className="block transition-colors hover:text-[#3f261c]"
                    >
                      适配人群
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-rounded-chinese text-sm font-bold tracking-[0.08em] text-[#7b4a2a] uppercase">
                    商务与支持
                  </h3>
                  <div className="mt-4 space-y-2 text-sm text-[#5d3d2d]">
                    <p>邮箱：hello@aita.app</p>
                    <p>服务时间：工作日 09:00 - 18:00</p>
                    <a
                      href="#cta"
                      className="inline-flex items-center rounded-full border border-[#e6ccb3] bg-white px-4 py-1.5 font-semibold text-[#6a4532] shadow-sm transition-colors hover:bg-[#fff3e8] hover:shadow-md"
                    >
                      申请产品内测
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-3 text-xs text-[#7b5a48] sm:flex-row sm:items-center sm:justify-between">
                <p>
                  © {new Date().getFullYear()} AI它 (AI TA) · All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#top" className="transition-colors hover:text-[#4a2c1f]">
                    返回顶部
                  </a>
                  <a
                    href="mailto:hello@aita.app"
                    className="transition-colors hover:text-[#4a2c1f]"
                  >
                    联系邮箱
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
