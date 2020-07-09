<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="mb-4">페이플 UI 커스터마이징 결제 연동 개요</h1>
        <blockquote class="mb-12 blockquote body-1">
            이곳에서는 RESTful API만으로 결제연동할 수 있는 방식에 대해 설명합니다. <br />
            일반적인 가맹점은 페이플이 제공하는 결제창을 호출하지만 가맹점이 자체 UI를 개발하여 고객에게 제공하고자 할때는 이 문서에서 제공하는 결제모듈을
            연동하시기 바랍니다.
        </blockquote>

        <article class="mb-12">
            <h2>간편결제/정기결제</h2>

            <h3 class="pl-4">
                간편결제 구현
            </h3>

            <blockquote class="mb-12 blockquote body-1">
                최초로 카드 등록을 마치고 빌링키(PCD_PAYER_ID)를 발급받은 후에, 가맹점의 고객은 매번 결제시마다 ‘결제하기’ 버튼을 눌러 결제에 동의하게 되며, 이
                경우 가맹점은 결제요청API를 통해 등록된 빌링키로 결제요청을 페이플에 주는 방식으로 구현하시면 됩니다. 다만, 페이플에서 제공하는 비밀번호를
                설정하는 방식은 사용할 수 없습니다. 비밀번호를 설정하기 위해서는 페이플에서 제공하는 결제창을 자바스크립트로 호출해야 하기 때문입니다.
            </blockquote>

            <h3 class="pl-4">
                정기결제 구현
            </h3>

            <blockquote class="mb-12 blockquote body-1">
                페이플에서 제공하는 정기결제는 스케줄링(예약)을 거는 방식이 아닌 결제가 필요할때마다 가맹점에서 실시간으로 결제요청을 진행하여 결제승인이 나는
                방식입니다. 즉, 가맹점에서 언제 해당유저의 등록카드(빌링키)로 결제가 나야하는지 내부로직을 구성하셔야 합니다. 가맹점의 고객 입장에서는 한번
                카드등록 후에 별도 인증작업없이 결제가 일어나는 것으로 인식하게 됩니다.
            </blockquote>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2>사용가능한 API</h2>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                NO
                            </td>
                            <td colspan="1" rowspan="1">
                                API
                            </td>
                            <td colspan="1" rowspan="1">
                                용도
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                1
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증
                            </td>
                            <td colspan="1" rowspan="1">
                                페이플 서버접근권한을 획득하기 위해 가맹점에서 페이플로 인증키를 보내 인증을 받고, 기타 API를 수행할 수 있는 권한을 받는
                                절차입니다. 모든 API는 가맹점 인증 후에 수행할 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                2
                            </td>
                            <td colspan="1" rowspan="1">
                                카드 등록
                            </td>
                            <td colspan="1" rowspan="1">
                                빌링키를 등록하는 API입니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                3
                            </td>
                            <td colspan="1" rowspan="1">
                                결제 요청
                            </td>
                            <td colspan="1" rowspan="1">
                                카드 등록 후에 획득한 빌링키로 실제 결제를 요청하는 API입니다. 빌링키가 있어야 하므로, 먼저 카드 등록을 해서 빌링키만 먼저 받고,
                                후에 결제요청을 하는 경우와 카드 등록을 하자마자 결제 요청을 하는 두 가지 케이스가 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                4
                            </td>
                            <td colspan="1" rowspan="1">
                                승인 취소
                            </td>
                            <td colspan="1" rowspan="1">
                                결제성공 후에 승인된 카드거래를 취소하는 API입니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                5
                            </td>
                            <td colspan="1" rowspan="1">
                                등록카드 해지
                            </td>
                            <td colspan="1" rowspan="1">
                                등록된 빌링키를 해지하는 API입니다. 해지된 빌링키는 다시 카드 등록하기 전까지는 사용 할 수 없습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                6
                            </td>
                            <td colspan="1" rowspan="1">
                                등록카드 조회
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점이 가지고 있는 등록된 카드정보(빌링키)가 유효한지를 체크하는 API입니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                7
                            </td>
                            <td colspan="1" rowspan="1">
                                결제결과 조회
                            </td>
                            <td colspan="1" rowspan="1">
                                결제결과 조회 API를 통해 결제요청에 대한 결과값을 별도로 조회할 수 있는 API입니다.
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2>API 권한획득</h2>
            <blockquote class="mb-12 blockquote body-1">
                모든 API는 단독으로 사용되지 않으며, 처음 가맹점 인증 API를 통해 페이플 서버접근권한을 획득한 후에야 수행할 수 있습니다. 사용목적별로 API 연동
                순서는 다음과 같습니다.
            </blockquote>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                NO
                            </td>
                            <td colspan="1" rowspan="1">
                                사용 목적
                            </td>
                            <td colspan="1" rowspan="1">
                                API 연동 순서
                            </td>
                            <td colspan="1" rowspan="1">
                                용도
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                1
                            </td>
                            <td colspan="1" rowspan="1">
                                카드 등록
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 &gt; 카드 등록
                            </td>
                            <td colspan="1" rowspan="1">
                                카드 등록을 통해 빌링키만을 먼저 받습니다. 카드 정보만 등록하고 결제는 추후(혹은 익월 등)에 결제가 필요할때 사용합니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="2">
                                2
                            </td>
                            <td colspan="1" rowspan="2">
                                결제 요청
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 &gt; 카드 등록 &gt; 결제요청
                            </td>
                            <td colspan="1" rowspan="1">
                                카드 등록과 동시에 결제요청이 필요할때 사용합니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 &gt; 결제요청
                            </td>
                            <td colspan="1" rowspan="1">
                                카드 등록(빌링키 생성)이 이미 완료된 경우 가지고 있는 빌링키로 결제 요청만을 수행할 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                3
                            </td>
                            <td colspan="1" rowspan="1">
                                승인 취소
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 &gt; 승인 취소
                            </td>
                            <td colspan="1" rowspan="1">
                                결제성공 후에 승인된 카드거래를 취소하는 API입니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                4
                            </td>
                            <td colspan="1" rowspan="1">
                                등록카드 해지
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 &gt; 등록카드 해지
                            </td>
                            <td colspan="1" rowspan="1">
                                등록된 빌링키를 해지하는 API입니다. 해지된 빌링키는 다시 카드 등록하기 전까지는 사용 할 수 없습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                5
                            </td>
                            <td colspan="1" rowspan="1">
                                등록카드 조회
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 &gt; 등록카드 조회
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점이 가지고 있는 등록된 카드정보(빌링키)가 유효한지를 체크하는 API입니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                6
                            </td>
                            <td colspan="1" rowspan="1">
                                결제결과 조회
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 인증 &gt; 결제결과 조회
                            </td>
                            <td colspan="1" rowspan="1">
                                결제결과 조회 API를 통해 결제요청에 대한 결과리턴을 별도로 조회할 수 있는 API입니다.
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
import { component as VueCodeHighlight } from "vue-code-highlight";
// import vchTheme from "../../node_modules/vue-code-highlight/themes/prism-coy.css";

export default {
    components: {
        VueCodeHighlight,
    },
    data() {
        return {
            code_1: `
POST /php/auth.php HTTP/1.1
Host: testcpay.payple.kr
Content-Type: application/json
Cache-Control: no-cache //AWS 이용 가맹점인 경우 REFERER
referer: https://가맹점 도메인

{
    "cst_id": "test",
    "custKey": "abcd1234567890"
}
`,
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/",
                },
                {
                    text: "카드결제",
                    disabled: true,
                },
            ],
        };
    },
};
</script>
