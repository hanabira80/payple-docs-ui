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
                    페이플은 API에서 CROS Allow를 처리하지 않습니다.<br />
                    따라서 ajax 등의 javascript 통신은 오류가 발생합니다. <br />
                    또한 가맹점 인증이 요청된 서버를 기준으로 결과가 리턴됩니다. <br />
                    만약 가맹점 인증요청 서버와 업무처리요청 서버가 다른 경우 결과를 수신 받지 못하게 되며 origin 오류가 발생하게 됩니다.<br /><br />

                    <b>원인1)</b> 결제결과를 수신 받지 못하는 경우<br />
                    <b>해결)</b> 가맹점인증요청 도메인과 결제요청을 보낸 도메인을 같게 설정해야 합니다.<br />
                    <span class="tree-gutter"></span><span class="tree-gutter"></span># Origin 오류 도메인 설정 예시<br />
                    <span class="tree-gutter"></span><span class="tree-gutter"></span>-가맹점인증요청 서버: api.aaa.com<br />
                    <span class="tree-gutter"></span><span class="tree-gutter"></span>-결제요청 서버: www.aaa.com <br />
                    <span class="tree-gutter"></span><span class="tree-gutter"></span>위와 같이 2차 도메인이 다른 경우에도 오류가 발생합니다.<br /><br />

                    <b>원인2)</b> 결제창이 호출된 후 창이 닫히지 않는 경우 <br />
                    <b>해결)</b> ‘원인1’의 해결방법과 같습니다.<br /><br />
                    <b>원인3)</b> AWS등의 클라우드 서버의 일부에서 도메인정보가 전송되지 않는 경우<br />
                    <b>해결)</b> 가맹점인증요청 파일의 ‘header’에 ‘referer’를 추가해야 합니다.<br />
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
                    /sub/fv123fa356a…. (x) <br />
                    https://payple.com/sub/fv123fa356a…. (o)
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>가맹점 인증을 하는데 AUTH0004 에러가 발생하는 이유가 뭔가요?</v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    페이플에서는 결제요청시 도메인 검증을 하고있기 때문에 Referer 가 넘어오지 않을 경우 AUTH0004 에러가 발생하게 됩니다.<br />
                    가맹점 인증 요청 헤더에 Referer 을 추가해주시면 됩니다.
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <Prism language="javascript">
                            {{ code_1_1 }}
                        </Prism>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                테스트에서는 가맹점 인증이 됐는데 운영서버에 적용 후 인증실패가 떠요!
                            </v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    운영서버(cpay)에서는 계약 후 발급받은 운영 ID, 운영 Key로 인증을 해주셔야 해요.<br />
                    가맹점 인증 요청 파일에서 cst_id와 custKey를 테스트에서 사용하는 test와 abcd1234567890를 사용하고 있지 않은지 확인해주세요.
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                페이플 결제창을 로드하는 JavaScript 코드 중 payple_auth_file 가 뭔지 모르겠어요.
                            </v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    결제창을 띄우기 위해서는 가맹점 인증요청을 통한 인증토큰이 필요합니다.<br />
                    obj.payple_auth_file 은 가맹점에서 개발(생성)하신 가맹점 인증요청 파일을 경로와 함께 설정해 주시는 프로퍼티입니다.<br /><br />
                    예) obj.payple_auth_file = ‘/auth/auth.php’;
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                테스트에서 결제창은 떴는데 닫기를 눌러도 창이 닫히지 않아요.
                            </v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    테스트에서는 결제요청시 도메인 검증을 하고있지 않기 때문에 가맹점 인증시 Referer 가 넘어오지 않아도 인증이 되기 때문에 결제창이 뜨지만,<br />
                    넘어온 도메인이 없기 때문에 리턴을 보낼 도메인을 찾을 수가 없어서 결제창이 닫히지 않게 됩니다.<Br /> 때문에 결제창은 떴는데 닫기를 눌러도
                    창이 닫히지 않는 경우 가맹점 인증 요청 헤더에 Referer 을 추가해주시면 됩니다.<br /><br />
                    <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                        운영에서는 도메인을 검증하기 때문에 Referer가 넘어오지 않으면 처음부터 결체창이 로드되지 않을 수 있습니다.
                    </v-alert>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <Prism language="javascript">
                            {{ code_1_2 }}
                        </Prism>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                얼마전까지 결제창 창닫기가 됐는데 지금은 안돼요!
                            </v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    운영에서는 도메인 검증을 통해 결제창을 호출하고 테스트에서는 검증하지 않지만 넘어온 Referer 로 리턴을 보내고 있습니다.<br />
                    가맹점인증 도메인과 리턴받는 도메인이 일치해야 리턴 URL을 보내드릴 수 있습니다.<br /><br />
                    <h4>1) Referer 를 추가해 주시거나</h4>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <Prism language="javascript">
                            {{ code_1_3 }}
                        </Prism>
                    </v-card>
                    <h4>2) 가맹점인증 요청 도메인과 PCD_RST_URL 이 일치하는지 확인해주세요.</h4>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                API 서버가 분리되어 있어서 Referer을 보낼 수 없어요!
                            </v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    API 서버를 따로 두고 계신 경우 Referer 에 가맹점의 도메인을 고정시켜 넣어주시면 됩니다.
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <Prism language="javascript">
                            {{ code_1_4 }}
                        </Prism>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                결제요청 후 웹훅으로 응답을 받고 싶습니다.
                            </v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    1. WebHook URL 설정<br />
                    <div class="tree-gutter"></div>
                    - 가맹점 관리자 페이지 -> 기본정보 -> 결제 결과 수신 URL (가맹점 미수신 결과)<br />
                    <div class="tree-gutter"></div>
                    - ex) https://www.aaa.com/webhook.php<br />
                    2. webhook 전송 시점<br />
                    <div class="tree-gutter"></div>
                    - 가맹점의 결제 결과 정상 return 수신 시 동시 전송<br />
                    <div class="tree-gutter"></div>
                    - 은행, 카드사 의 결제 내역 지연 수신에 따른 미수신 내역의 1분 단위 결과 조회 후 수신 내역을 가맹점으로 전송<br />
                    3. 데이터<br />
                    <div class="tree-gutter"></div>
                    - Json String<br />
                    <div class="tree-gutter"></div>
                    - API가이드 결제 결과 파라미터 참조
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                웹훅 URL이 오지 않아요. 왜 그런건가요?
                            </v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    가맹점 관리자로 로그인 후 ‘상점정보 > 기본정보’ 에서 설정해주셔야 하는데요, <br />
                    결제결과를 받기를 원하시면 ‘결제결과 수신 URL’ 을 설정하고<br />
                    계좌(카드) 해지 결과를 받기 원하시면 ‘계좌(카드)해지결과 수신 URL’ 을 설정해 주셔야해요.<br /><br />

                    제공되는 웹훅 URL 종류<br />
                    <div class="tree-gutter"></div>
                    결제결과 수신<br />
                    <div class="tree-gutter"></div>
                    <div class="tree-gutter"></div>
                    웹훅 전송 시점<br />
                    <div class="tree-gutter"></div>
                    <div class="tree-gutter"></div>
                    <div class="tree-gutter"></div>
                    - 가맹점의 결제 결과 정상 return 수신 시 동시 전송<br />
                    <div class="tree-gutter"></div>
                    <div class="tree-gutter"></div>
                    <div class="tree-gutter"></div>
                    - 결제 내역 수신이 지연된 거래건의 return 수신 시<br /><br />
                    <div class="tree-gutter"></div>
                    계좌(카드)해지결과 수신<br />
                    <div class="tree-gutter"></div>
                    <div class="tree-gutter"></div>
                    웹훅 전송 시점<br />
                    <div class="tree-gutter"></div>
                    <div class="tree-gutter"></div>
                    <div class="tree-gutter"></div>
                    가맹점에서 페이플 관리자사이트를 통해 개별적으로 등록해지시<br /><br />

                    1. 웹훅 URL 설정 방법<br />
                    가맹점 관리자 페이지 > 기본정보 > 결제 결과 수신 URL (가맹점 미수신 결과 확인)입력<br />
                    <div class="tree-gutter"></div>
                    ex) https://www.aaa.com/PAYhook.php<br />
                    가맹점 관리자 페이지 > 기본정보 > 계좌(카드)해지결과 수식 URL 입력<br />
                    <div class="tree-gutter"></div>
                    ex) https://www.aaa.com/cancelhook.php<br /><br />

                    2. 전송 규약<br />
                    JSON방식으로 데이터를 POST<br /><br />

                    더 자세한 내용은 docs.payple.kr 에서 확인해주세요.
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item>
                        <v-list-item-avatar tile color="blue lighten-1 elevation-3">
                            <span class="white--text">Q</span>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                인앱브라우저에서 결제창을 연동했는데 팝업이 차단되었다는 경고창이 뜹니다.
                            </v-list-item-title>
                            <v-list-item-subtitle>2020.06.17</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 px-6">
                    인앱브라우저에서의 팝업 차단 문제는 두가지 방법이 있습니다.<br /><br />

                    1. 사용자 가 해당 앱에서 팝업차단을 해제 해 주는 방법<br />
                    2. 가맹점 결제창 연동시 obj.PCD_RST_URL 을 아래와 같이 FULL URL 로 설정하는 방식입니다.<br />
                    <div class="tree-gutter"></div>
                    obj.PCD_RST_URL = "https://www.test.com/리턴받을 주소";<br />
                    2.의 경우 페이스북, 카카오톡 등 외부 앱에 연동하실 때 인앱브라우저의 문제를 해결하고자 하실 경우 사용하실 수 있습니다.
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

        <!-- <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <span class="half-bg--tooltip cursor-pointer" v-bind="attrs" v-on="on">승인</span>
            </template>
            <span>
                카드사에서 가맹점의 결제요청에 최종적으로 보내주는 결제완료상태값으로,<br />
                승인을 받았다는 것은 결제가 성공적으로 이루어졌다는 것을 의미합니다.
            </span>
        </v-tooltip> -->
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
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Referer: https://가맹점 도메인 
Cache-Control: no-cache
{
  "cst_id": "test",
  "custKey": "abcd1234567890"
}
`,
            code_1_2: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Referer: https://가맹점 도메인
Cache-Control: no-cache
{
  "cst_id": "test",
  "custKey": "abcd1234567890"
}
`,
            code_1_3: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Referer: https://가맹점 도메인
Cache-Control: no-cache
{
  "cst_id": "test",
  "custKey": "abcd1234567890"
}
`,
            code_1_4: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Referer: ‘https://aaa.kr’
Cache-Control: no-cache
{
  "cst_id": "test",
  "custKey": "abcd1234567890"
}
`,
        };
    },
};
</script>
