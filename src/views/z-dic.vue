<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">페이플 용어 사전</h1>
        <blockquote class="mb-12 blockquote body-1">
            페이플 용어에 대한 안내입니다.<br />
            목록 이외의 용어에 대한 문의사항은 개발팀으로 연락 부탁드립니다.
        </blockquote>

        <article class="mb-12">
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td>
                                용어
                            </td>
                            <td>
                                설명
                            </td>
                        </tr>
                        <tr>
                            <td>
                                승인
                            </td>
                            <td class="text-left">
                                카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br />
                                승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                출금
                            </td>
                            <td class="text-left">
                                계좌결제에서 결제요청이 이루어지면 고객의 계좌에서 돈이 바로 빠져나가고, 이것을 출금이라고 합니다.<br />
                                거래가 확정되었다는 점에서 카드의 ‘승인’과 같지만,<br />
                                신용카드의 승인시점은 신용카드 결제일(출금시점)과 다르다는 점에 차이점이 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                취소
                            </td>
                            <td class="text-left">
                                카드결제에서 승인된 거래건이 취소되었음을 말합니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                환불
                            </td>
                            <td class="text-left">
                                계좌결제에서는 신용카드 결제와 달리 돈이 계좌에서 바로 출금되고, 카드처럼 취소되지 않습니다.<br />
                                이에 대응하여 페이플이 직접 출금금액을 고객에게 입금하는 서비스를 제공하며,<br />
                                이것을 ‘환불대행서비스’(환불)이라고 합니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                빌링키 등록 및 결제요청 방식
                            </td>
                            <td class="text-left">
                                빌링키 등록 및 결제요청 방식을 규정합니다.<br />
                                브라우저 안에서 결제데이터를 주고받는 ‘즉시결제(PAY)’ 방식과 <br />
                                가맹점 서버에서 주고받는 ‘가맹점 확인 후 결제(CERT)’ 방식,<br />
                                당장 결제를 내지 않고 빌링키만 등록하는 빌링키 등록(Auth) 방식이 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                결제요청 재컨펌 (CERT)
                            </td>
                            <td class="text-left">
                                브라우저(결제창)에서 결제요청과 승인을 모두 처리하는 PAY방식과 달리,<br />
                                CERT방식에서는 최종 결제요청이 브라우저가 아닌 페이플 서버를 통해 이루어집니다.<br />
                                이는 결제자의 PC/모바일 환경에 따라 브라우저의 오류가 발생할 경우에 나타날 수 있는<br />
                                결제결과데이터 수신실패 케이스를 예방할 수 있다는 장점이 있습니다. <br />
                                또한 결제자가 결제정보를 입력하는 도중에 일어나는 재고(인벤토리)변화에 따라, <br />
                                결제요청을 결제직전에 마지막으로 가맹점에서 확인하여야 하는 경우 유용하게 쓸 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                즉시결제 (PAY)
                            </td>
                            <td class="text-left">
                                페이플 브라우저(결제창) 안에서 결제요청과 결제가 이루어지는 방식입니다.<br />
                                직관적이지만, 결제자의 PC/모바일에서 오류가 브라우저에 영향을 미칠시<br/>
                                결제결과데이터의 수신이 실패될 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                빌링키 등록 (AUTH)
                            </td>
                            <td class="text-left">
                                자바스크립트를 이용하여 결제를 하기 위해서는 PAY와 CERT방식중에 하나를 선택하여야 하지만<br />
                                빌링키 생성을 위해 빌링키 등록(Auth)만 수행할 경우에는 실제 결제가 일어나는 것이 아니므로<br />
                                Auth 파라미터를 선택하여 빌링키만 발급받습니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                가맹점 인증
                            </td>
                            <td class="text-left">
                                가맹점에 발급되는 고유 ID와 Key값을 확인하여 <br />
                                실제 페이플과 계약된 가맹점이 맞는지를 체크하는 인증 절차입니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                최초결제
                            </td>
                            <td class="text-left">
                                최초로 결제를하는 과정입니다. <br />
                                일반적으로 최초결제시에 빌링키 등록과 결제가 동시에 이루어지지만,<br />
                                정기결제와 같은 특수한 환경에서는 빌링키 등록만 먼저하고 최초결제는 추후 이루어지기도 합니다.<br />
                                빌링키 등록이 없는 결제방식에서는 최초결제,재결제시 결제프로세스가 동일합니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                재결제
                            </td>
                            <td class="text-left">
                                빌링키 등록이 끝난 이후, 이 빌링키를 이용해서 다시 결제할 때를 말합니다. <br />
                                빌링키를 이용해서 재결제시에는 결제프로세스를 줄여 간편하게 결제할 수 있습니다.<br />
                                빌링키 등록이 없는 결제방식에서는 최초결제,재결제시 결제프로세스가 동일합니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                빌링키 등록
                            </td>
                            <td class="text-left">
                                카드/계좌 정보를 임의의 고유식별문자인 빌링키로 변환하는 과정입니다.<br />
                                민감한 개인정보인 카드/계좌 정보의 노출없이 암호화된 키값으로 간편하게 결제할 수 있게 도와줍니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                앱카드
                            </td>
                            <td class="text-left">
                                카드사가 제공하는 앱카드,ISP 등의 인증방식으로 결제되는 방식입니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                가맹점 인증요청 도메인
                            </td>
                            <td class="text-left">
                                가맹점 인증요청시에 페이플에서 검증하는 가맹점의 도메인입니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                결제 요청 도메인
                            </td>
                            <td class="text-left">
                                가맹점 인증요청 후 이루어지는 결제 요청시에 페이플에서 검증하는 가맹점의 도메인입니다. <br />
                                가맹점 인증요청시에 검증된 도메인과 같아야 요청이 처리됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                주문번호
                            </td>
                            <td class="text-left">
                                가맹점에서 특정거래건에 부여하는 유니크값입니다.<br />
                                결제요청시 주문번호를 가맹점에서 보내주지 않으면 페이플에서 임의로 생성하여 적용합니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                월  중복결제 방지 기능
                            </td>
                            <td class="text-left">
                                선택옵션으로 월1회, 단 한차례만 결제가 나야하는 서비스를 지원하기 위해<br />
                                페이플에서 카드/계좌의 등록된 빌링키 당 월 1회를 초과하는 결제시도를 차단하는 기능입니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                /pg/auth
                            </td>
                            <td class="text-left">
                                가맹점인증을 요청하는 가맹점의 backend script 파일이며 가맹점에서 만들어야 합니다.
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
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
            toolTipShow: false,
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/",
                },
                {
                    text: "용어사전",
                    disabled: true,
                },
            ],
            code_1_1: `
#링크생성 요청
POST 가맹점 인증 후 리턴받은 PCD_PAY_URL HTTP/1.1
Host: 가맹점 인증 후 리턴받은 PCD_PAY_HOST
Content-Type: application/json
Cache-Control: no-cache
{
    "PCD_CST_ID": "가맹점 인증 후 리턴받은 cst_id",
    "PCD_CUST_KEY": "가맹점 인증 후 리턴받은 custKey",
    "PCD_AUTH_KEY": "가맹점 인증 후 리턴받은 AuthKey",  
    "PCD_PAY_WORK": "LINKREG",
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_GOODS": "상품1",
    "PCD_PAY_TOTAL": 100
}
`,
            code_2_1: `
{
    "PCD_LINK_RST":"success",
    "PCD_LINK_MSG":"링크생성이 완료되었습니다.",
    "PCD_PAY_TYPE":"card",
    "PCD_PAY_GOODS":"상품1",
    "PCD_PAY_TOTAL":100,
    "PCD_TAXSAVE_FLAG":"N",
    "PCD_LINK_EXPIREDATE":"",
    "PCD_LINK_MEMO":"",
    "PCD_LINK_KEY":"Mjox...",
    "PCD_LINK_URL":"https:..."
}
`,
        };
    },
};
</script>
