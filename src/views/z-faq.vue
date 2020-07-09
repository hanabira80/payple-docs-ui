<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">FAQ</h1>

        <v-expansion-panels multiple focusable hover inset>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>CORS(Cross Origin Resource Sharing) 안내</v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    페이플은 API에서 CROS Allow를 처리하지 않습니다.<br/>
                    따라서 ajax 등의 javascript 통신은 오류가 발생합니다. <br/>
                    또한 가맹점 인증이 요청된 서버를 기준으로 결과가 리턴됩니다. <br/>
                    만약 가맹점 인증요청 서버와 업무처리요청 서버가 다른 경우 결과를 수신 받지 못하게 되며 origin 오류가 발생하게 됩니다.<br/><br/>

                    <b>원인1)</b> 결제결과를 수신 받지 못하는 경우<br/>
                    <b>해결)</b> 가맹점인증요청 도메인과 결제요청을 보낸 도메인을 같게 설정해야 합니다.<br/>
                    <span class="tree-gutter"></span><span class="tree-gutter"></span># Origin 오류 도메인 설정 예시<br/>
                    <span class="tree-gutter"></span><span class="tree-gutter"></span>-가맹점인증요청 서버: api.aaa.com<br/>
                    <span class="tree-gutter"></span><span class="tree-gutter"></span>-결제요청 서버: www.aaa.com <br/>
                    <span class="tree-gutter"></span><span class="tree-gutter"></span>위와 같이 2차 도메인이 다른 경우에도 오류가 발생합니다.<br/><br/>

                    <b>원인2)</b> 결제창이 호출된 후 창이 닫히지 않는 경우 <br/>
                    <b>해결)</b> ‘원인1’의 해결방법과 같습니다.<br/><br/>
                    <b>원인3)</b> AWS등의 클라우드 서버의 일부에서 도메인정보가 전송되지 않는 경우<br/>
                    <b>해결)</b> 가맹점인증요청 파일의 ‘header’에 ‘referer’를 추가해야 합니다.<br/>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>페이스북, 카카오톡 등 외부 앱에 연동되는 인앱브라우저 PCD_RST_URL 처리 방법</v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    /sub/fv123fa356a…. (x) <br/>
                    https://payple.com/sub/fv123fa356a…. (o)
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <v-divider class="my-12"></v-divider>

        <v-row class="mb-12 pt-12">
            <v-col col="12" sm="4">
                <v-card>
                    <v-list-item>
                        <v-list-item-avatar color="pink darken-1">
                            <v-icon color="white">
                                mdi-frequently-asked-questions
                            </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title class=" mb-2">FAQ</v-list-item-title>
                            <v-list-item-subtitle>높은 빈도의 문의를 모아봤어요</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn fab text color="blue accent-4">
                                <v-icon>
                                    mdi-vector-link
                                </v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col col="12" sm="4">
                <v-card>
                    <v-list-item>
                        <v-list-item-avatar color="indigo darken-4">
                            <v-icon color="white">
                                mdi-git
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class=" mb-2">GITHUB</v-list-item-title>
                            <v-list-item-subtitle>페이플 오픈 소스에 참여 하세요</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn fab text color="blue accent-4">
                                <v-icon>
                                    mdi-vector-link
                                </v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col col="12" sm="4">
                <v-card>
                    <v-list-item>
                        <v-list-item-avatar color="teal accent-4">
                            <v-icon color="white">
                                mdi-email-send-outline
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class=" mb-2">MAIL</v-list-item-title>
                            <v-list-item-subtitle>페이플 개발팀에 문의해보세요</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn fab text color="blue accent-4">
                                <v-icon>
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
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
