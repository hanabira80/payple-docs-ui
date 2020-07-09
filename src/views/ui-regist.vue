<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">카드 등록</h1>

        <article class="mb-12">
            <h2 class="">
                빌링키
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                민감한 개인/금융정보인 카드정보를 교환하는 경우 보안상 문제가 발생할 수 있습니다. 이 문제를 예방하기 위해서 페이플에서는 카드정보와 매칭되는
                고유식별정보를 암호화한 키값을 생성하여 가맹점에 제공합니다. 이 암호화된 키값을 빌링키(PCD_PAYER_ID)라고 하며, 이 프로세스를 ‘카드 등록’이라고
                합니다. 빌링키는 설사 복호화되더라도 카드정보를 알 수없어 안전합니다. API결제방식에서는 이 빌링키가 필수적으로 사용됩니다. 즉 결제요청을 하기
                위해서는 가맹점에서 최초로 페이플에 고객의 카드정보를 제공하여야 하며, 페이플에서는 이 정보를 카드사에 제공하여 빌링키로 변환하여 가맹점에
                빌링키를 전달합니다. 이후 결제부터는 가맹점에서 빌링키를 페이플에 전달하여 처리하게 됩니다. 공식문서에 나와있는 빌링키 등록 및 결제요청
                방식(AUTH / PAY / CERT)은 이곳에서 사용하지 않고 AUTHREG를 사용합니다. 페이플 결제창을 통해 빌링키(payer_id)를 생성하는 것이 아니라 가맹점이
                커스터마이징한 화면단에서 페이플 서버로 API를 통해 등록하기 때문입니다.
            </blockquote>

            <v-card max-width="1000" raised class="pa-2 ma-4 mb-12">
                <v-img :src="require('../../src/assets/test-1.png')" cover class="grey darken-4 "></v-img>
            </v-card>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                결제요청을 위한 선행단계로 가맹점 인증 단계를 거쳐야 합니다. 해당 내용은 이곳에서 확인하실 수 있습니다.
            </v-alert>

            <h3 class="pl-4">
                카드등록 요청 메시지
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
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                UFVNNVZpZk4reWo5UFRualUwcGV4dz09
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
                                T3JzRkp5L1FTcEFDa1FQdHo5Um1UZz09
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
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e3
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 후 리턴 받은 인증 Token
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_WORK
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
                                AUTHREG
                            </td>
                            <td colspan="1" rowspan="1">
                                ‘AUTHREG’ - 고정값
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
                                ‘card’ - 고정값
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NO
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                324578
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점에서 사용하는 회원번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NAME
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                100
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                홍길동
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 이름 *특정제휴카드의 경우 카드소유주의 실명을 인증하며, 실패할 경우 승인이 거절됩니다..
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_BIRTH
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                10
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                800101 | 3318701049
                            </td>
                            <td colspan="1" rowspan="1">
                                카드 소유자 생년월일 또는 법인 사업자번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_HP
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                01023457896
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 핸드폰번호를 전송하시면 고객의 승인문자 민원을 방지하기 위한 알림톡이 발송됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_EMAIL
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                help@payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                해당 이메일 주소로 결제 안내메일이 발송됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDNUM
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                16
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                1111222233334444
                            </td>
                            <td colspan="1" rowspan="1">
                                카드번호 - 16자리 가 안되는 경우도 번호만 그대로 입력 ex) 11112222333344
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDEXYEAR
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                22
                            </td>
                            <td colspan="1" rowspan="1">
                                카드 유효기간 년도
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDEXMONTH
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                03
                            </td>
                            <td colspan="1" rowspan="1">
                                카드 유효기간 월
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDPW
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                11
                            </td>
                            <td colspan="1" rowspan="1">
                                카드 비밀번호 앞 2자리
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                ‘Y’ 고정
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>

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
                카드등록 응답 메시지
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                필드명
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
                                PCD_PAY_RST
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
                                success | error
                            </td>
                            <td colspan="1" rowspan="1">
                                카드등록 결과
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CODE
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
                                CDAU0000
                            </td>
                            <td colspan="1" rowspan="1">
                                카드등록 결과 코드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MSG
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
                                인증(등록)완료
                            </td>
                            <td colspan="1" rowspan="1">
                                카드등록 결과 메시지
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
                                test
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 ID
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
                                ‘card’ - 고정값
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_WORK
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
                                AUTHREG
                            </td>
                            <td colspan="1" rowspan="1">
                                ‘AUTHREG’ - 고정값
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_ID
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
                                d0toSS9sT084bVJSNThScnFXQm9Gdz09
                            </td>
                            <td colspan="1" rowspan="1">
                                카드등록 후 리턴받은 빌링키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NO
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                1234
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점에서 사용하는 회원번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_NAME
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                100
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                홍길동
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 이름
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_HP
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                01012345678
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 핸드폰번호
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_EMAIL
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                help@payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                해당 이메일 주소로 결제 안내메일이 발송됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDNAME
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                100
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                BC 카드
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
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                16
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                1111********4444
                            </td>
                            <td colspan="1" rowspan="1">
                                카드번호(중간 8자리 * 처리)
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                ‘Y’ - 고정값
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>

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
POST 가맹점 인증 후 리턴받은 PCD_PAY_URL HTTP/1.1
Host 가맹점 인증 후 리턴받은 PCD_PAY_HOST
Content-Type: application/json
Referer: http://localhost:8080
Cache-Control: no-cache
{
  "PCD_CST_ID" : "가맹점인증 후 리턴받은 cst_id",
  "PCD_CUST_KEY" : "가맹점인증 후 리턴받은 custKey",
  "PCD_AUTH_KEY" : "가맹점인증 후 리턴받은 AuthKey", 
  "PCD_PAY_WORK" : "AUTHREG",
  "PCD_PAY_TYPE" : "card",
  "PCD_PAYER_NO" : "1234",
  "PCD_PAYER_NAME" : "홍길동",
  "PCD_PAYER_BIRTH" : "800101",
  "PCD_PAYER_HP" : "01023456789",
  "PCD_PAYER_EMAIL" : "help@payple.kr",
  "PCD_PAY_CARDNUM" : "1234567890123456",
  "PCD_PAY_CARDEXYEAR" : "23",
  "PCD_PAY_CARDEXMONTH" : "03",
  "PCD_PAY_CARDPW" : "33",
  "PCD_REGULER_FLAG" : "Y"	
}
`,
            code_1_2: `
java
`,
            code_1_3: `
node
`,
            code_1_4: `
node
`,
            code_2_1: `
{
  "PCD_PAY_RST" => "success",    
  “PCD_PAY_CODE” => “CDAU0000”,
  "PCD_PAY_MSG" => "인증(등록)완료",
  "PCD_CST_ID" => "test",
  "PCD_PAY_TYPE" => "card",	
  "PCD_PAY_WORK" => "AUTHREG",
  "PCD_PAYER_ID" => "d0toSS9sT084bVJSNThScnFXQm9Gdz09",
  "PCD_PAYER_NO" => 1234,	
  "PCD_PAYER_NAME" => "홍길동",
  "PCD_PAYER_HP" : "01023456789",
  "PCD_PAYER_EMAIL" : "help@payple.kr",
  "PCD_PAY_CARDNAME" : "BC 카드",
  "PCD_PAY_CARDNUM" : "1111********4444",
  "PCD_REGULER_FLAG" => "Y"
}
`,
        };
    },
};
</script>
