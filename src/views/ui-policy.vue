<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">정책</h1>

        <article class="mb-12">
            <h2 class="">
                지원 카드사
            </h2>

            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                은행명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                신한카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                BC 카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                SC BC
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                우리 BC
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                경남 BC
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                대구 BC
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                NH BC
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                기업 BC
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                부산 BC
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                하나 BC
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                신한 BC
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                국민 BC
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                KB국민
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                현대카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                삼성카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                롯데AMX
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                하나카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                하나(구외환)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                롯데카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                NH채움
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                씨티카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                우리카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                광주카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                전북카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                제주카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                수협카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                신협카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                새마을금고
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                우체국
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                저축은행
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                KDB산업
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                평화카드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                한미
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                신세계한미
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                케이뱅크
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                카카오뱅크체크
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h2 class="">
                결제내용에 대한 고객 알림톡 - 고객 휴대폰번호(옵션) 전달 시 발송
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                페이플 카드결제는 다날과 함께하는 2차 PG이기 때문에 고객의 승인문자에 <b>(주)페이플 또는 다날자동결제</b>로 표시됩니다. <br />
                이로인해 발생할 수 있는 민원을 방지하고자 아래와 같이 알림톡을 고객에게 발송합니다.
            </blockquote>

            <v-card max-width="400" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/c-13-1.jpg')" cover class="grey darken-4 "></v-img>
            </v-card>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                최초 카드 등록 시 카드 유효성 검증을 위해 100원 승인 후 취소가 진행됩니다.
            </v-alert>

            <h2 class="mt-12">
                취소정책
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                개념: 카드사에서 거래건을 없던 것으로 되돌리는(원복) 행위입니다.<br /><br />
                -취소수수료: 카드사에서 처리하며, 가맹점은 별도로 비용의 부담이 없습니다. (취소시 결제수수료 원복)<br /><br />
                -취소시간: 취소요청시 즉시처리합니다. 다만 신용카드의 경우 카드결제일이 지난 경우와 체크카드의 경우 대금을 바로 고객 통장에서 출금하므로, 출금이
                완료된 건의 취소는 카드사마다 처리하는데에 시간이 소요될 수 있습니다. 다만 신용카드의 경우 카드결제일이 지난 경우와 체크카드의 경우 대금을 바로
                고객 통장에서 출금하므로, 출금이 완료된 건의 취소는 카드사마다 처리하는데에 시간이 소요될 수 있습니다.<br /><br />
                -서비스 오픈여부: 가맹점에 별도 비용이 들지 않으므로 기본(디폴트)으로 오픈하여 드립니다.<br /><br />
                -취소의 제한: 결제완료된 건을 취소하게 되면 페이플에서 해당금액을 앞으로 가맹점에 정산할 예정금액에서 차감합니다. 차감될 정산예정금액이 남아
                있지 않은 경우에는 취소가 불가합니다.
            </blockquote>
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
                    text: "API",
                    disabled: true,
                },
                {
                    text: "정책",
                    disabled: true,
                },
            ],
            code_1_1: `
#해지 요청
POST 가맹점 인증 후 리턴받은 PCD_PAY_URL HTTP/1.1
Host: 가맹점 인증 후 리턴받은 PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache
{
  "PCD_CST_ID": "가맹점 인증 후 리턴받은 cst_id",
  "PCD_CUST_KEY": "가맹점 인증 후 리턴받은 custKey",
  "PCD_AUTH_KEY": "가맹점 인증 후 리턴받은 AuthKey",
  "PCD_PAYER_ID": "d0to...",
  "PCD_PAYER_NO": “1234”
}
`,
            code_2_1: `
{
  "PCD_PAY_RST" => "success",
  “PCD_PAY_CODE” => “PUSER0000”,
  "PCD_PAY_MSG" => "카드해지완료",
  "PCD_PAY_TYPE" => "card",
  "PCD_PAY_WORK" => "PUSERDEL",
  "PCD_PAYER_ID" => "d0to...",
  "PCD_PAYER_NO" => “1234”
}
`,
        };
    },
};
</script>

