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
        path: "/ui/regist",
        name: "ui-regist",
        meta: { title: "카드등록" },
        component: () => import("../views/ui-regist.vue"),
    },
    {
        path: "/ui/pay-request",
        name: "ui-pay-request",
        meta: { title: "결제요청" },
        component: () => import("../views/ui-pay-request.vue"),
    },
    {
        path: "/ui/regular-once",
        name: "ui-regular-once",
        meta: { title: "결제요청 (월 중복결제 방지)" },
        component: () => import("../views/ui-regular-once.vue"),
    },
    {
        path: "/ui/pay-cancel",
        name: "ui-pay-cancel",
        meta: { title: "승인취소" },
        component: () => import("../views/ui-pay-cancel.vue"),
    },
    {
        path: "/ui/reg-cancel",
        name: "ui-reg-cancel",
        meta: { title: "등록카드 해지" },
        component: () => import("../views/ui-reg-cancel.vue"),
    },
    {
        path: "/ui/reg-search",
        name: "ui-reg-search",
        meta: { title: "등록카드 조회" },
        component: () => import("../views/ui-reg-search.vue"),
    },
    {
        path: "/ui/result-search",
        name: "ui-result-search",
        meta: { title: "결제결과 조회" },
        component: () => import("../views/ui-result-search.vue"),
    },
    {
        path: "/ui/policy",
        name: "ui-policy",
        meta: { title: "카드결제 재결제 간편결제" },
        component: () => import("../views/ui-policy.vue"),
    },
    {
        path: "/webhook",
        name: "webhook",
        meta: { title: "웹훅 URL 설정" },
        component: () => import("../views/z-webhook.vue"),
    },
    {
        path: "/sample-code",
        name: "sample-code",
        meta: { title: "샘플코드" },
        component: () => import("../views/z-sample-code.vue"),
    },
    {
        path: "/docs-ver",
        name: "docs-ver",
        meta: { title: "문서 버전" },
        component: () => import("../views/z-docs-ver.vue"),
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
