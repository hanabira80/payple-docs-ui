<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">웹훅(Webhook) URL 설정</h1>
        <blockquote class="mb-12 blockquote body-1">
            가맹점으로부터 들어온 결제요청을 처리하는 경우 간혹 카드사나 은행으로부터 결제결과에 대한 리턴값이 오지 않거나, 지연되는 현상이 발생할 수 있습니다.
            이러한 경우 가맹점은 결제결과를 수신받을 수 없으며, 페이플 관리자사이트의 내역과 가맹점에서 받은 결제내역이 차이가 생기게 됩니다.<br /><br />
            이를 예방하기 위해서 페이플에서 웹훅 URL을 지원합니다.<br /><br />
            웹훅이란 한 응용 프로그램에서 어떤 이벤트가 발생했을 때 다른 응용 프로그램으로 실시간 정보를 제공하는 방법입니다.<br />
            가맹점에서 페이플으로부터 데이터를 수신할 수 있는 웹페이지(URL)을 설정하게 되면 페이플에서 해당 URL로 데이터를 전송하게 됩니다.<br />
            또한, 결제결과 수신 뿐만 아니라 등록된 계좌나 카드(빌링키)가 해지될 때도 웹훅 URL로 수신할 수 있습니다.<br />
            보통의 경우에는 사용되지 않지만, 가맹점에서 페이플 관리자사이트를 통해 개별적으로 계좌나 카드의 등록을 해지하는 경우 웹훅으로도 내역을 확인할 수
            있는 장점이 있습니다. <br />
        </blockquote>

        <article class="mb-12">
            <h2 class="">
                제공되는 웹훅 URL 종류
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                &#9679;결제결과 수신<br />
                <span class="tree-gutter"></span>&#9702;웹훅 전송 시점<br />
                <span class="tree-gutter"></span><span class="tree-gutter"></span>- 가맹점의 결제 결과 정상 return 수신 시 동시 전송<br />
                <span class="tree-gutter"></span><span class="tree-gutter"></span>- 결제 내역 수신이 지연된 거래건의 return 수신 시<br />
                &#9679;계좌(카드)해지결과 수신<br />
                <span class="tree-gutter"></span>&#9702;웹훅 전송 시점<br />
                <span class="tree-gutter"></span><span class="tree-gutter"></span>- 가맹점에서 페이플 관리자사이트를 통해 개별적으로 등록해지시
            </blockquote>

            <h2 class="">
                웹훅 URL 설정 방법
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                1) 가맹점 관리자 페이지 > 기본정보 > 결제 결과 수신 URL (가맹점 미수신 결과 확인) 입력<br />
                <span class="tree-gutter"></span>ex) https://www.aaa.com/PAYhook.php<br /><br />
                2) 가맹점 관리자 페이지 > 기본정보 > 계좌(카드)해지결과 수식 URL 입력 <br />
                <span class="tree-gutter"></span>ex) https://www.aaa.com/cancelhook.php
            </blockquote>

            <h2 class="">
                전송 규약
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                JSON방식으로 데이터를 POST
            </blockquote>

            <h2 class="">
                결제결과 수신 데이터
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                결제결과 수신 웹훅 URL을 설정했을 때 가맹점에서 수신 할 수 있는 데이터의 샘플양식입니다.
            </blockquote>
            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <Prism language="php">
                    {{ code_1_1 }}
                </Prism>
            </v-card>

            <h2 class="">
                계좌(카드) 해지 수신 데이터:
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                계좌(카드) 해지 수신 웹훅 URL을 설정했을 때 가맹점에서 수신 할 수 있는 데이터의 샘플양식입니다.
            </blockquote>
            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <Prism language="php">
                    {{ code_2_1 }}
                </Prism>
            </v-card>
        </article>
    </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-php";
import Prism from "vue-prism-component";

export default {
    components: {
        Prism,
    },
    data() {
        return {
            toolTipShow: false,
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/",
                },
                {
                    text: "웹훅(Webhook) URL 설정",
                    disabled: true,
                },
            ],
            code_1_1: `
{
    "PCD_PAY_RST" => "success",
    "PCD_PAY_MSG" => “결제결과 리턴 메시지”,
    "PCD_CST_ID" => “가맹점 ID”,
    "PCD_PAY_OID" => “주문번호”,
    "PCD_PAY_TYPE" => “card”,
    "PCD_PAYER_NO" => “회원번호”,
    "PCD_PAYER_ID" => “계좌(카드)등록후 리턴받은 빌링키”,
    "PCD_PAY_YEAR" => “월 중복결제 년”,
    "PCD_PAY_MONTH" => “월 중복결제 월”,
    "PCD_PAY_GOODS" => “상품명”,
    "PCD_PAY_TOTAL" => “상품금액”,
    "PCD_REGULER_FLAG" => “월 중복결제 방지 사용여부”,
    "PCD_REFUND_TOTAL" => “환불금액”,
    "PCD_REFUND_TIME" => “환불시간”,
    "PCD_PAYCANCEL_FLAG" => 'Y'
}
`,
            code_2_1: `
{
    "PCD_CST_ID" : “가맹점 ID”,
    "PCD_PAY_WORK" : "PUSERDEL",
    "PCD_PAY_RST" : "success",
    "PCD_PAY_MSG" : "2008 : 고객요청으로 자동이체 해지되었음(업체해지)",
    "PCD_PAY_TYPE" : “card”,
    "PCD_PAYER_ID" : “계좌(카드) 등록시 리턴받은 빌링키”,
    "PCD_PAYER_NAME" : “이름”,
    "PCD_PAYER_HP" : “결제고객 핸드폰번호”
}	
`,
        };
    },
};
</script>
