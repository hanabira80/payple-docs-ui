<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-12">결제 요청 (default)</h1>

        <article class="mb-12">
            <blockquote class="mb-12 blockquote body-1">
                카드등록 후 발급받은 빌링키로 REST API 를 통해 결제요청을 할 수 있는 API입니다. 일반적으로 가맹점에서 사용하는 결제요청 API입니다.
            </blockquote>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                결제요청을 위한 선행단계로 가맹점 인증 단계를 거쳐야 합니다. 해당 내용은 이곳에서 확인하실 수 있습니다.
            </v-alert>

            <h3 class="pl-4">
                결제 요청 메시지
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                필드명
                            </td>
                            <td colspan="1" rowspan="1">
                                필수
                            </td>
                            <td colspan="1" rowspan="1">
                                타입
                            </td>
                            <td colspan="1" rowspan="1">
                                길이
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
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
                                PCD_PAY_TYPE
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                20
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
                                PCD_PAYER_ID
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
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
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                255
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
                                PCD_PAYER_HP
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1">
                                01012345678
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 핸드폰번호를 전송하시면 고객의 승인문자 민원을 방지하기 위한 알림톡이 발송됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYER_EMAIL
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                100
                            </td>
                            <td colspan="1" rowspan="1">
                                help@payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                해당 이메일 주소로 결제 안내메일이 발송됩니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_GOODS
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2048
                            </td>
                            <td colspan="1" rowspan="1">
                                상품1
                            </td>
                            <td colspan="1" rowspan="1">
                                - 이모티콘을 제외한 상품명을 입력해주세요.<br />- 이모티콘으로 인해 일부 카드사에서 승인거절이  발생할 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TOTAL
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1">
                                1000
                            </td>
                            <td colspan="1" rowspan="1">
                                카드결제 요청금액 (최소 100원)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_ISTAX
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                1
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                과세설정 (Default: Y 이며,  과세:Y, 복합과세:Y, 비과세: N) ISTAX:Y, TAXTOTAL:공란이면 페이플에서 10% 부가세를 자동으로
                                적용합니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TAXTOTAL
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                20
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
                                PCD_PAY_OID
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
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
                                PCD_SIMPLE_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                1
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                ‘Y’ - 고정값
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_USER_DEFINE1
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2048
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 입력값1
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 사용 필드 1
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_USER_DEFINE2
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2048
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 입력값2
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 사용 필드 2
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
                결제 응답 메시지
            </h3>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                필드명
                            </td>
                            <td colspan="1" rowspan="1">
                                필수
                            </td>
                            <td colspan="1" rowspan="1">
                                타입
                            </td>
                            <td colspan="1" rowspan="1">
                                길이
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                8
                            </td>
                            <td colspan="1" rowspan="1">
                                success
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 결과(success|error)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CODE
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                8
                            </td>
                            <td colspan="1" rowspan="1">
                                CDAU0000
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 결과 코드
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_MSG
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                결제완료
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 결과 메세지
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_TYPE
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                20
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
                                PCD_PAY_OID
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
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
                                PCD_PAYER_NO
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                2324
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
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
                                PCD_PAYER_EMAIL
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                help@payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                결제고객 이메일
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_GOODS
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2048
                            </td>
                            <td colspan="1" rowspan="1">
                                테스트 상품
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                20
                            </td>
                            <td colspan="1" rowspan="1">
                                1000
                            </td>
                            <td colspan="1" rowspan="1">
                                카드결제 완료금액
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_ISTAX
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                1
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
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                Number
                            </td>
                            <td colspan="1" rowspan="1">
                                20
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
                                PCD_PAY_TIME
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                Date
                            </td>
                            <td colspan="1" rowspan="1">
                                14
                            </td>
                            <td colspan="1" rowspan="1">
                                20190901140130
                            </td>
                            <td colspan="1" rowspan="1">
                                결제시간
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_CARDNAME
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                100
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                16
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
                                PCD_PAY_CARDTRADENUM
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                24
                            </td>
                            <td colspan="1" rowspan="1">
                                2019041413203326920
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                128
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
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                1024
                            </td>
                            <td colspan="1" rowspan="1">
                                https://www.danalpay.com/receipt/creditcard/view.aspx?dataType=receipt&amp;cpid=9810030929&amp;data=4UXGrKqvqJlmnhA3i6%2F2Ydp5kFEN8GayK3pIcOTDoFVQcl8J7RWZnLTWaHhMCaQC
                            </td>
                            <td colspan="1" rowspan="1">
                                매출전표 출력 링크
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_SIMPLE_FLAG
                            </td>
                            <td colspan="1" rowspan="1">
                                O
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                1
                            </td>
                            <td colspan="1" rowspan="1">
                                Y
                            </td>
                            <td colspan="1" rowspan="1">
                                ‘Y’ 고정
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_USER_DEFINE1
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2048
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 입력값1
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 사용 필드 1
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_USER_DEFINE2
                            </td>
                            <td colspan="1" rowspan="1"></td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                2048
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 입력값2
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 사용 필드 2
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
POST 가맹점 인증 후 리턴받은 PCD_PAY_URL  HTTP/1.1
Host 가맹점 인증 후 리턴받은 PCD_PAY_HOST
Content-Type: application/json
Referer: http://localhost:8080
Cache-Control: no-cache	
{
  "PCD_CST_ID" : "가맹점 인증 후 리턴받은 cst_id",
  "PCD_CUST_KEY" : "가맹점 인증 후 리턴받은 custKey",
  "PCD_AUTH_KEY" : "가맹점 인증 후 리턴받은 AuthKey", 
  "PCD_PAY_TYPE": "card",	
  "PCD_PAYER_ID": "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
  "PCD_PAYER_NO": "2324",
  "PCD_PAYER_HP" : "01023456789",	
  "PCD_PAYER_EMAIL": "dev@payple.kr",
  "PCD_PAY_GOODS": "상품1",
  "PCD_PAY_TOTAL": "1000",
  “PCD_PAY_ISTAX”: “Y”,
  “PCD_PAY_TAXTOTAL”: “10”,
  "PCD_PAY_OID": "test201804000001",
  "PCD_SIMPLE_FLAG": "Y",
  “PCD_USER_DEFINE1”: ”가맹점 정의1”,
  “PCD_USER_DEFINE2”: ”가맹점 정의2”
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
  “PCD_PAY_CODE” => “SPCD0000”,
  "PCD_PAY_MSG" => "결제완료",
  "PCD_PAY_TYPE" => "card",	
  "PCD_PAY_OID" => "test201804000001",
  "PCD_PAYER_NO" => "2324",
  "PCD_PAYER_ID" => "NS9qNTgzU2xRNHR2RmFBWWFBTWk5UT09",
  "PCD_PAYER_EMAIL" => "dev@payple.kr",
  "PCD_PAY_GOODS" => "상품1",	
  "PCD_PAY_TOTAL" => "1000",
  “PCD_PAY_ISTAX”: “Y”,
  “PCD_PAY_TAXTOTAL”: “10”,
  "PCD_PAY_TIME" => "20180423130201",
  "PCD_PAY_CARDNANE" => "BC 카드",
  "PCD_PAY_CARDNUM" => "1111********4444",	
  "PCD_PAY_CARDTRADENUM" => "201904141320332692022400",
  “PCD_PAY_CARDAUTHNO” => “98123445”,
  “PCD_PAY_CARDRECEIPT” => “https://www.danalpay.com/receipt/creditcard/view.aspx?dataType=receipt&cpid=9810030929&data=jq8%2BUmqBzYoCy%2BchBEE….”, 
  "PCD_SIMPLE_FLAG" => "Y",
  “PCD_USER_DEFINE1” => “가맹점 사용 필드 1”,	
  “PCD_USER_DEFINE2” => “가맹점 사용 필드 2”
}
`,
        };
    },
};
</script>
