<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">결제결과 조회</h1>
        <blockquote class="mb-12 blockquote body-1">
            기타 사유로 결제결과를 수신받지 못하는 경우 결제결과 조회 API를 통해 결과값을 조회할 수 있습니다.
        </blockquote>
        <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
            요청을 위한 선행단계로 가맹점 인증 단계를 거쳐야 합니다. 해당 내용은 이곳에서 확인하실 수 있습니다.
        </v-alert>

        <article class="mb-12">
            <h2 class="">
                등록카드 해지
            </h2>

            <h3 class="pl-4">
                요청 메시지
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                요청변수
                            </td>
                            <td colspan="1" rowspan="1">
                                타입
                            </td>
                            <td colspan="1" rowspan="1">
                                길이
                            </td>
                            <td colspan="1" rowspan="1">
                                필수
                            </td>
                            <td colspan="1" rowspan="1">
                                값
                            </td>
                            <td colspan="1" rowspan="1">
                                설명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_CST_ID
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                8
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                UFVN...
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 후 리턴 받은 cst_id Token
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_CUST_KEY
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                T3Jz...
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 후 리턴 받은 custKey Token
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_AUTH_KEY
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                a688c...
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 후 리턴 받은 인증 Token
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYCHK_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                1
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                결과조회 여부(Y|N)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TYPE
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                card
                            </td>
                            <td colspan="1" rowspan="1">
                                결제수단
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_REGULER_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                1
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                월 중복결제 방지 (사용: Y, 그 외: N)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_YEAR
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                4
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                2020
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 년도 (PCD_REGULER_FLAG: 'Y' 일 때 필수)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MONTH
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2
                            </td>
                            <td colspan="1" rowspan="1">
                                -
                            </td>
                            <td colspan="1" rowspan="1">
                                03
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 월 (PCD_REGULER_FLAG: 'Y' 일 때 필수)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_OID
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                test099942200156938
                            </td>
                            <td colspan="1" rowspan="1">
                                주문번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_DATE
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                8
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                20200320
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청일자(YYYYMMDD)
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <div class="d-flex align-center pa-4">
                    <div class="font-italic font-weight-bold">
                        REST REQUEST
                    </div>
                </div>
                <Prism language="php">
                    {{ code_1_1 }}
                </Prism>
            </v-card>

            <h3 class="pl-4">
                응답 메시지
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                응답변수
                            </td>
                            <td colspan="1" rowspan="1">
                                예시
                            </td>
                            <td colspan="1" rowspan="1">
                                설명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_RST
                            </td>
                            <td colspan="1" rowspan="1">
                                success
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 결과 (success/error)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CODE
                            </td>
                            <td colspan="1" rowspan="1">
                                PCHK000
                            </td>
                            <td colspan="1" rowspan="1">
                                결제결과 코드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MSG
                            </td>
                            <td colspan="1" rowspan="1">
                                결제완료
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 결과 메시지 (결제완료|실패 등)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_OID
                            </td>
                            <td colspan="1" rowspan="1">
                                test201804000001
                            </td>
                            <td colspan="1" rowspan="1">
                                주문번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TYPE
                            </td>
                            <td colspan="1" rowspan="1">
                                card
                            </td>
                            <td colspan="1" rowspan="1">
                                결제수단
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NO
                            </td>
                            <td colspan="1" rowspan="1">
                                1234
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점에서 사용하는 회원번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_ID
                            </td>
                            <td colspan="1" rowspan="1">
                                NS9qNTgzU2…
                            </td>
                            <td colspan="1" rowspan="1">
                                카드등록 후 리턴받은 빌링키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_EMAIL
                            </td>
                            <td colspan="1" rowspan="1">
                                dev@payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                해당 이메일 주소로 결제 안내메일이 발송됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_YEAR
                            </td>
                            <td colspan="1" rowspan="1">
                                2020
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 년도 (PCD_REGULER_FLAG 사용시 응답)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MONTH
                            </td>
                            <td colspan="1" rowspan="1">
                                03
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 구분 월 (PCD_REGULER_FLAG 사용시 응답)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_GOODS
                            </td>
                            <td colspan="1" rowspan="1">
                                상품1
                            </td>
                            <td colspan="1" rowspan="1">
                                상품명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TOTAL
                            </td>
                            <td colspan="1" rowspan="1">
                                100
                            </td>
                            <td colspan="1" rowspan="1">
                                결제금액
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_ISTAX
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                과세설정 (Default: Y 이며,  과세:Y, 복합과세:Y, 비과세: N)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TAXTOTAL
                            </td>
                            <td colspan="1" rowspan="1">
                                10
                            </td>
                            <td colspan="1" rowspan="1">
                                복합과세(과세+면세) 주문건에 필요한 금액이며 가맹점에서 전송한 값을 부가세로 설정합니다.과세 또는 비과세의 경우 사용하지
                                않습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDNAME
                            </td>
                            <td colspan="1" rowspan="1">
                                BC카드
                            </td>
                            <td colspan="1" rowspan="1">
                                카드사명
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDNUM
                            </td>
                            <td colspan="1" rowspan="1">
                                1111- ****-**** -2222
                            </td>
                            <td colspan="1" rowspan="1">
                                카드번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDTRADENUM
                            </td>
                            <td colspan="1" rowspan="1">
                                2020031413203326920
                            </td>
                            <td colspan="1" rowspan="1">
                                거래 키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDAUTHNO
                            </td>
                            <td colspan="1" rowspan="1">
                                98123445
                            </td>
                            <td colspan="1" rowspan="1">
                                승인번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDRECEIPT
                            </td>
                            <td colspan="1" rowspan="1">
                                https://www.danal..
                            </td>
                            <td colspan="1" rowspan="1">
                                매출전표 출력 링크
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TIME
                            </td>
                            <td colspan="1" rowspan="1">
                                2020-03-20...
                            </td>
                            <td colspan="1" rowspan="1">
                                결제완료 시간
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_REGULER_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                N
                            </td>
                            <td colspan="1" rowspan="1">
                                월 중복결제 방지 (사용: Y, 그 외: N)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NAME
                            </td>
                            <td colspan="1" rowspan="1">
                                홍길동
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 이름
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <div class="d-flex align-center pa-4">
                    <div class="font-italic font-weight-bold">
                        REST RESPONSE
                    </div>
                </div>
                <Prism language="php">
                    {{ code_2_1 }}
                </Prism>
            </v-card>
        </article>
        <v-divider class="mb-12"></v-divider>

        
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
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/",
                },
                {
                    text: "카드결제",
                    disabled: false,
                    to: "/card/outline",
                },
                {
                    text: "최초결제",
                    disabled: true,
                },
                {
                    text: "결제 창 호출",
                    disabled: true,
                },
            ],
            code_1_1: `
POST 가맹점 인증 후 리턴받은 PCD_PAY_URL HTTP/1.1
Host: 가맹점 인증 후 리턴받은 PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache
{
   "PCD_CST_ID": "가맹점 인증 후 리턴받은 cst_id"
   "PCD_CUST_KEY": "가맹점 인증 후 리턴받은 custKey"
   "PCD_AUTH_KEY": "가맹점 인증 후 리턴받은 AuthKey",
   "PCD_PAYCHK_FLAG": "Y",
   "PCD_PAY_TYPE": "card",
   "PCD_PAY_OID": "test201804000001",
   "PCD_PAY_DATE": “20200320”
}
`,
            code_2_1: `
{
   "PCD_PAY_RST" => "success",
   "PCD_PAY_MSG" => "결제완료",
   "PCD_PAY_OID" => "test201804000001",
   "PCD_PAY_TYPE" => "card",
   "PCD_PAYER_NO" => "1234",
   "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
   "PCD_PAYER_EMAIL" => "dev@payple.kr",
   "PCD_PAY_YEAR" => "2020",
   "PCD_PAY_MONTH" => "03",
   "PCD_PAY_GOODS" => "상품1",
   "PCD_PAY_TOTAL" => "100",
   "PCD_PAY_ISTAX" => "Y",
   "PCD_PAY_TAXTOTAL" => "10",
   "PCD_CARDNAME" => "BC카드",
   "PCD_CARDNUM" => "1111- ****-**** -2222",
   "PCD_CARDTRADENUM" => "202003141320332692022400",
   “PCD_PAY_CARDAUTHNO” => “98123445”,
   “PCD_PAY_CARDRECEIPT” => “https://...”,
   “PCD_PAY_TIME” =>  “2020-03-20…”,
   “PCD_REGULER_FLAG” => “N”,
   “PCD_PAYER_NAME” => “홍길동”
}
`,
        };
    },
};
</script>
