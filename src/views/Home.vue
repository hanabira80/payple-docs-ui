<template>
    <div class="px-6 py-4">
        <!-- <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs> -->

        <h1 class="mt-2">
            Simple Payment For People!<br />
            We are Payple!
        </h1>
        <p class="mt-4 mb-12">
            환영합니다. 페이플 결제 연동개발을 위한 메뉴얼입니다
        </p>

        <article class="mb-12">
            <h2>목차</h2>
            <v-divider class="my-6"></v-divider>
            <h3 class="mb-4">카드결제</h3>
            <p class="pl-2">
                <router-link to="/card/outline/">카드결제 개요</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/auth">카드결제 가맹점 인증요청</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/call">카드결제 결제창 호출</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/repeat">카드결제 재결제 개요</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/simple">카드결제 재결제 간편결제</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/normal">카드결제 재결제 일반결제</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/regular">카드결제 재결제 정기결제</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/link">카드결제 재결제 링크결제</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/cancel">카드결제 승인취소</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/reg-cancel">카드결제 등록카드 해지</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/reg-search">카드결제 등록카드 조회</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/result-recieve">카드결제 결제결과 수신</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/result-search">카드결제 결제결과 조회</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/card/error-code">카드결제 응답오류</router-link>
            </p>
            <v-divider class="my-6"></v-divider>
            <h3 class="mb-4">계좌결제</h3>
            <p class="pl-2">
                <router-link to="/bank/outline">계좌결제 개요</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/auth">계좌결제 가맹점 인증요청</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/call">계좌결제 결제창 호출</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/repeat">계좌결제 재결제 개요</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/simple">계좌결제 재결제 간편결제</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/normal">계좌결제 재결제 일반결제</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/regular">계좌결제 재결제 정기결제</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/link">계좌결제 재결제 링크결제</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/cancel">계좌결제 승인취소</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/recipt-request">계좌결제 현금영수증 발행</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/recipt-cancel">계좌결제 현금영수증 취소</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/reg-cancel">계좌결제 등록계좌 해지</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/reg-search">계좌결제 등록계좌 조회</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/result-recieve">계좌결제 결제결과 수신</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/result-search">계좌결제 결제결과 조회</router-link>
            </p>
            <p class="pl-2">
                <router-link to="/bank/error-code">계좌결제 응답오류</router-link>
            </p>
        </article>

        <v-alert class="d-inline-block" border="top" colored-border type="info" elevation="2">
            2020년 5월, 페이플 DOCS는 리뉴얼이 진행중입니다.<br />
            용어정리, 결제흐름 및 단계를 직관적으로 파악할수 있도록 개선되며,<br />
            결제연동 과정에서 자주 발생하는 이슈에 관한 분석 및 해결안이 추가 될 예정입니다.<br /><br />
            빠른 시일내에 컨텐츠 업데이트가 완료되도록 노력을 다하겠습니다.
        </v-alert>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subNavi: [
                {
                    text: "홈",
                    disabled: true,
                    to: "/",
                },
            ],
        };
    },
};
</script>
