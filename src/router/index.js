import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import notFound from "../components/404.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { title: "페이플 UI커스터마이징 결제 연동가이드" },
    },
    {
        path: "/ui/outline",
        name: "ui-outline",
        meta: { title: "개요" },
        component: () => import("../views/ui-outline.vue"),
    },
    {
        path: "/ui/install/outline",
        name: "ui-install-outline",
        meta: { title: "환경설정 개요" },
        component: () => import("../views/ui-install-outline.vue"),
    },
    {
        path: "/ui/install/auth",
        name: "ui-install-auth",
        meta: { title: "상황별 가맹점 인증 요청 방식" },
        component: () => import("../views/ui-install-auth.vue"),
    },
    {
        path: "/ui/regist/card",
        name: "ui-regist-card",
        meta: { title: "카드등록" },
        component: () => import("../views/ui-regist-card.vue"),
    },
    {
        path: "/ui/pay/request",
        name: "ui-pay-request",
        meta: { title: "결제요청" },
        component: () => import("../views/ui-pay-request.vue"),
    },
    {
        path: "/ui/pay/regular-refuse",
        name: "ui-pay-regular--refuse",
        meta: { title: "결제요청 (월 중복결제 방지)" },
        component: () => import("../views/ui-pay-regular--refuse.vue"),
    },
    {
        path: "/ui/pay/cancel",
        name: "ui-pay-cancel",
        meta: { title: "승인취소" },
        component: () => import("../views/ui-pay-cancel.vue"),
    },
    {
        path: "/ui/regist/cancel",
        name: "ui-regist-cancel",
        meta: { title: "등록카드 해지" },
        component: () => import("../views/ui-regist-cancel.vue"),
    },
    {
        path: "/ui/regist/search",
        name: "ui-regist-search",
        meta: { title: "등록카드 조회" },
        component: () => import("../views/ui-regist-search.vue"),
    },
    {
        path: "/ui/result/search",
        name: "ui-result-search",
        meta: { title: "결제결과 조회" },
        component: () => import("../views/ui-result-search.vue"),
    },
    {
        path: "/ui/code/response",
        name: "ui-code-response",
        meta: { title: "응답코드" },
        component: () => import("../views/ui-code-response.vue"),
    },
    {
        path: "/ui/policy",
        name: "ui-policy",
        meta: { title: "정책" },
        component: () => import("../views/ui-policy.vue"),
    },
    {
        path: "/webhook",
        name: "webhook",
        meta: { title: "웹훅 URL 설정" },
        component: () => import("../views/z-webhook.vue"),
    },
    {
        path: "/code/sample",
        name: "code-sample",
        meta: { title: "샘플코드" },
        component: () => import("../views/z-code-sample.vue"),
    },
    {
        path: "/docs-ver",
        name: "docs--ver",
        meta: { title: "문서 버전" },
        component: () => import("../views/z-docs--ver.vue"),
    },
    {
        path: "/faq",
        name: "faq",
        meta: { title: "FAQ" },
        component: () => import("../views/z-faq.vue"),
    },
];
// router.beforeEach((to, from, next) => {
//     document.title = meta.title
//     next()
// });
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

// router.afterEach((to, from) => {
//     Vue.nextTick(() => {
//       document.title = to.meta.title(to)
//     })
//   })

export default router;
