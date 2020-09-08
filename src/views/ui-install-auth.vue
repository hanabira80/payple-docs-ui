<template>
    <div :class="{ 'px-2 py-4': $vuetify.breakpoint.xs, 'px-6 py-6': $vuetify.breakpoint.smAndUp }">
        <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="">상황별 가맹점 인증 요청 방식</h1>
        <blockquote class="mb-12 blockquote body-1">
            케이스별로 가맹점 인증 요청에 사용하는 요청변수가 다르니,<br />
            아래 리스트에서 사용하시려는 가맹점 인증 요청변수를 확인하시길 바랍니다.
        </blockquote>

        <article class="mb-12">
            <h2 class="">
                카드 등록 API의 가맹점 인증 요청
            </h2>
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
                                cst_id
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
                                custKey
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
                                abcd1234567890
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 Key
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
                            <td colspan="1" rowspan="1"></td>
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
                            <td colspan="1" rowspan="1"></td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>

            <v-tabs background-color="indigo" grow dark>
                <v-tab color="purple darken-1">
                    <div class=" font-weight-bold">
                        요청예시
                    </div>
                </v-tab>
                <v-tab>
                    <div class=" font-weight-bold">
                        PHP 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        JAVA 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        Node 샘플코드
                    </div>
                </v-tab>

                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                요청예시
                            </div>
                        </div>

                        <Prism language="javascript">
                            {{ code_1_1 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                PHP 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-php" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="php">
                            {{ code_1_2 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                JAVA 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-java" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_1_3 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                Node 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-nodeJS" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_1_4 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
            </v-tabs>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                간편결제에서 월 중복결제 방지기능 사용시에도 가맹점 인증 요청 형식은 변하지 않습니다.
            </v-alert>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2 class="">
                결제요청 (default) API의 가맹점 인증 요청
            </h2>

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
                                cst_id
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
                                custKey
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
                                abcd1234567890
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 Key
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
                            <td colspan="1" rowspan="1"></td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_SIMPLE_FLAG
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
                            <td colspan="1" rowspan="1"></td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>

            <v-tabs background-color="indigo" grow dark>
                <v-tab color="purple darken-1">
                    <div class=" font-weight-bold">
                        요청예시
                    </div>
                </v-tab>
                <v-tab>
                    <div class=" font-weight-bold">
                        PHP 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        JAVA 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        Node 샘플코드
                    </div>
                </v-tab>

                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                요청예시
                            </div>
                        </div>

                        <Prism language="javascript">
                            {{ code_2_1 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                PHP 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-php" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="php">
                            {{ code_2_2 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                JAVA 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-java" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_2_3 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                Node 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-nodeJS" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_2_4 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2 class="">
                결제요청 (월 중복결제 방지) API의 가맹점 인증 요청
            </h2>
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
                                cst_id
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
                                custKey
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
                                abcd1234567890
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 Key
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
                            <td colspan="1" rowspan="1"></td>
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
                            <td colspan="1" rowspan="1"></td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>
            <v-tabs background-color="indigo" grow dark>
                <v-tab color="purple darken-1">
                    <div class=" font-weight-bold">
                        요청예시
                    </div>
                </v-tab>
                <v-tab>
                    <div class=" font-weight-bold">
                        PHP 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        JAVA 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        Node 샘플코드
                    </div>
                </v-tab>

                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                요청예시
                            </div>
                        </div>

                        <Prism language="javascript">
                            {{ code_3_1 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                PHP 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-php" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="php">
                            {{ code_3_2 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                JAVA 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-java" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_3_3 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                Node 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-nodeJS" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_3_4 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2 class="">
                승인취소 API의 가맹점 인증 요청
            </h2>
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
                                cst_id
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
                                가맹점 아이디
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                custKey
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
                                abcd1234567890
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 키
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAYCANCEL_FLAG
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
                                승인취소  API 사용할 때 필수
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>
            <v-tabs background-color="indigo" grow dark>
                <v-tab color="purple darken-1">
                    <div class=" font-weight-bold">
                        요청예시
                    </div>
                </v-tab>
                <v-tab>
                    <div class=" font-weight-bold">
                        PHP 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        JAVA 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        Node 샘플코드
                    </div>
                </v-tab>

                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                요청예시
                            </div>
                        </div>

                        <Prism language="javascript">
                            {{ code_4_1 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                PHP 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-php" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="php">
                            {{ code_4_2 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                JAVA 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-java" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_4_3 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                Node 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-nodeJS" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_4_4 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2 class="">
                등록카드 해지 API의 가맹점 인증 요청
            </h2>
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
                                cst_id
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
                                가맹점 아이디
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                custKey
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
                                abcd1234567890
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 키
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
                                PUSERDEL
                            </td>
                            <td colspan="1" rowspan="1">
                                등록카드 해지  API 사용할 때 필수
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>
            <v-tabs background-color="indigo" grow dark>
                <v-tab color="purple darken-1">
                    <div class=" font-weight-bold">
                        요청예시
                    </div>
                </v-tab>
                <v-tab>
                    <div class=" font-weight-bold">
                        PHP 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        JAVA 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        Node 샘플코드
                    </div>
                </v-tab>

                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                요청예시
                            </div>
                        </div>

                        <Prism language="javascript">
                            {{ code_5_1 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                PHP 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-php" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="php">
                            {{ code_5_2 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                JAVA 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-java" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_5_3 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                Node 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-nodeJS" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_5_4 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2 class="">
                등록카드 조회 API의 가맹점 인증 요청
            </h2>
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
                                cst_id
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
                                가맹점 아이디
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                custKey
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
                                abcd1234567890
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 키
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
                                PUSERINFO
                            </td>
                            <td colspan="1" rowspan="1">
                                등록카드조회 API 사용할 때 필수
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>
            <v-tabs background-color="indigo" grow dark>
                <v-tab color="purple darken-1">
                    <div class=" font-weight-bold">
                        요청예시
                    </div>
                </v-tab>
                <v-tab>
                    <div class=" font-weight-bold">
                        PHP 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        JAVA 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        Node 샘플코드
                    </div>
                </v-tab>

                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                요청예시
                            </div>
                        </div>

                        <Prism language="javascript">
                            {{ code_6_1 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                PHP 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-php" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="php">
                            {{ code_6_2 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                JAVA 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-java" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_6_3 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                Node 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-nodeJS" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_6_4 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2 class="">
                결제결과 조회 API의 가맹점 인증 요청
            </h2>
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
                                cst_id
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
                                가맹점 아이디
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                custKey
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
                                abcd1234567890
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점 키
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
                            <td colspan="1" rowspan="1"></td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                샘플코드
            </h3>

            <v-tabs background-color="indigo" grow dark>
                <v-tab color="purple darken-1">
                    <div class=" font-weight-bold">
                        요청예시
                    </div>
                </v-tab>
                <v-tab>
                    <div class=" font-weight-bold">
                        PHP 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        JAVA 샘플코드
                    </div>
                </v-tab>
                <v-tab>
                    <div class="font-weight-bold">
                        Node 샘플코드
                    </div>
                </v-tab>

                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                요청예시
                            </div>
                        </div>

                        <Prism language="javascript">
                            {{ code_7_1 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                PHP 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-php" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="php">
                            {{ code_7_2 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                JAVA 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-java" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_7_3 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                        <div class="d-flex align-center pa-4">
                            <div class="font-italic font-weight-bold">
                                Node 샘플코드
                            </div>

                            <div class="ml-auto">
                                <v-btn small color="indigo accent-2" dark href="https://github.com/PAYPLECORP/sample-nodeJS" target="_blank">
                                    <v-icon left>
                                        mdi-gitlab
                                    </v-icon>
                                    Github
                                </v-btn>
                            </div>
                        </div>
                        <Prism language="javascript">
                            {{ code_7_4 }}
                        </Prism>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </article>
        <v-divider class="mb-12"></v-divider>

        <article class="mb-12">
            <h2 class="">
                가맹점 인증 요청 API 공통 응답 메시지
            </h2>
            <blockquote class="mb-12 blockquote body-1">
                요청형식은 다르지만 가맹점 인증에 대한 응답메세지 형식은 동일합니다.
            </blockquote>
            <v-card class="temp_table ma-4 mb-12">
                <v-simple-table class="table-hover-disable">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                응답변수
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
                                server_name
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                testcpay.payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                요청 URL
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                result
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                success
                            </td>
                            <td colspan="1" rowspan="1">
                                결과확인
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                result_msg
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                사용자 인증 완료!!
                            </td>
                            <td colspan="1" rowspan="1">
                                결과메세지
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                cst_id
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
                                가맹점 ID
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                custKey
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
                                가맹점 Key
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                AuthKey
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                a688ccb3555c25cd722483f03e23065c3d0251701ad6da895eb2d830bc06e34d
                            </td>
                            <td colspan="1" rowspan="1">
                                가맹점인증토큰
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_HOST
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                https://testcpay.payple.kr
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 도메인
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                PCD_PAY_URL
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                &lt;return_uri&gt;
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 URI *고정값으로 사용하지 않기를 권장합니다.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                return_url
                            </td>
                            <td colspan="1" rowspan="1">
                                String
                            </td>
                            <td colspan="1" rowspan="1">
                                255
                            </td>
                            <td colspan="1" rowspan="1">
                                &lt;return full uri&gt;
                            </td>
                            <td colspan="1" rowspan="1">
                                결제요청 URI (PCD_PAY_HOST + PCD_PAY_URL) *고정값으로 사용하지 않기를 권장합니다.
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

            <h3 class="pl-4">
                가맹점 인증 요청 응답(공통)
            </h3>

            <v-card outlined elevation="4" class="temp_code ma-4 mb-12">
                <div class="d-flex align-center pa-4">
                    <div class="font-italic font-weight-bold">
                        요청예시
                    </div>
                </div>

                <Prism language="javascript">
                    {{ code_8_1 }}
                </Prism>
            </v-card>

            <v-alert border="left" colored-border type="error" elevation="2" class="mx-4">
                가맹점 인증 요청이 완료되어 응답을 받게 되면 이제 작업이 필요한 API를 수행하게 됩니다. <br />
                가맹점 인증 응답 메세지 안에 들어 있는 AuthKey와 return_url 정보를 확인하고 <br />
                앞으로 수행할 작업에 해당 값을 입력하시면 됩니다.
            </v-alert>
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
            subNavi: [
                {
                    text: "홈",
                    disabled: false,
                    to: "/",
                },
                {
                    text: "환경설정",
                    disabled: true,
                },
                {
                    text: "상황별 인증 요청 방식",
                    disabled: true,
                },
            ],
            code_1_1: `
/*
    * TEST : https://testcpay.payple.kr
    * REAL : https://cpay.payple.kr
    */
    POST /php/auth.php HTTP/1.1
    Host: testcpay.payple.kr
    Content-Type: application/json
    Cache-Control: no-cache
    {
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_WORK": "AUTHREG"
    }
`,
            code_1_2: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    header("Expires: Mon 26 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d, M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0; pre-check=0", false);
    header("Pragma: no-cache");
    header("Content-type: application/json; charset=utf-8");
    
    // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
    $post_data = array (
        "cst_id" => "test",
        "custKey" => "abcd1234567890",
        "PCD_PAY_TYPE" => "card",
        "PCD_PAY_WORK": "AUTHREG"
    );
    
    $ch = curl_init('https://testcpay.payple.kr/php/auth.php');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data));

    ob_start();
    $response = curl_exec ($ch);
    $buffer = ob_get_contents();
    ob_end_clean();

    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    curl_close ($ch);
    if($status_code == 200) {
        echo $buffer;
    }


`,
            code_1_3: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    @ResponseBody
    @PostMapping(value = "/auth")
    public JSONObject payAuth() {
        JSONObject jsonObject = new JSONObject();
        JSONParser jsonParser = new JSONParser();
        try {

            String pURL = "https://testcpay.payple.kr/php/auth.php";
            // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
            String cst_id = "test";
            String cust_key = "abcd1234567890";
            String PCD_PAY_TYPE = "card";
            String PCD_PAY_WORK = "AUTHREG";

            JSONObject obj = new JSONObject();
            obj.put("cst_id", cst_id);
            obj.put("custKey", cust_key);
            obj.put("PCD_PAY_TYPE", PCD_PAY_TYPE);
            obj.put("PCD_PAY_WORK", PCD_PAY_WORK);

            URL url = new URL(pURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod("POST");
            con.setRequestProperty("content-type", "application/json");
            con.setDoOutput(true);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(obj.toString());
            wr.flush();
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();

            // System.out.println("HTTP 응답 코드 : " + responseCode);
            // System.out.println("HTTP Body : " + response.toString());

            jsonObject = (JSONObject) jsonParser.parse(response.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonObject;
    }


`,
            code_1_4: `
.env.json
    {
        "CST_ID" : "test", //발급받은 비밀키. 유출에 주의하시기 바랍니다.
        "CUST_KEY" : "abcd1234567890",
        "PCD_PAY_WORK": "AUTHREG",
        "PCD_PAY_TYPE": "card",
        "URL" : "https://testcpay.payple.kr/php/auth.php"
    }
    
    app.js
    /*
    * 가맹점인증 요청 REST
    */
    app.post('/auth', (req, res) => {
    
        /* 
        * process.env.URL
        * TEST : https://testcpay.payple.kr/php/auth.php
        * REAL : https://cpay.payple.kr/php/auth.php 
        */
        let url = process.env.URL,
            params = {
                cst_id  : process.env.CST_ID || '',
                custKey : process.env.CUST_KEY || '',
                PCD_PAY_WORK : process.env.PCD_PAY_WORK || '',
                PCD_PAY_TYPE : process.env.PCD_PAY_TYPE || ''
            }
    
    
        post(url, JSON.stringify(params), {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(r => res.json( {  ...r.data }))
            .catch(err => console.error(err))
    })


`,
            code_2_1: `
/*
    * TEST : https://testcpay.payple.kr
    * REAL : https://cpay.payple.kr
    */
    POST /php/auth.php HTTP/1.1
    Host: testcpay.payple.kr
    Content-Type: application/json
    Cache-Control: no-cache
    {
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_WORK": "AUTHREG"
    }
`,
            code_2_2: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    header("Expires: Mon 26 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d, M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0; pre-check=0", false);
    header("Pragma: no-cache");
    header("Content-type: application/json; charset=utf-8");
    
    // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
    $post_data = array (
        "cst_id" => "test",
        "custKey" => "abcd1234567890",
        "PCD_PAY_TYPE" => "card",
        "PCD_PAY_WORK": "AUTHREG"
    );
    
    $ch = curl_init('https://testcpay.payple.kr/php/auth.php');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data));

    ob_start();
    $response = curl_exec ($ch);
    $buffer = ob_get_contents();
    ob_end_clean();

    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    curl_close ($ch);
    if($status_code == 200) {
        echo $buffer;
    }


`,
            code_2_3: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    @ResponseBody
    @PostMapping(value = "/auth")
    public JSONObject payAuth() {
        JSONObject jsonObject = new JSONObject();
        JSONParser jsonParser = new JSONParser();
        try {

            String pURL = "https://testcpay.payple.kr/php/auth.php";
            // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
            String cst_id = "test";
            String cust_key = "abcd1234567890";
            String PCD_PAY_TYPE = "card";
            String PCD_PAY_WORK = "AUTHREG";

            JSONObject obj = new JSONObject();
            obj.put("cst_id", cst_id);
            obj.put("custKey", cust_key);
            obj.put("PCD_PAY_TYPE", PCD_PAY_TYPE);
            obj.put("PCD_PAY_WORK", PCD_PAY_WORK);

            URL url = new URL(pURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod("POST");
            con.setRequestProperty("content-type", "application/json");
            con.setDoOutput(true);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(obj.toString());
            wr.flush();
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();

            // System.out.println("HTTP 응답 코드 : " + responseCode);
            // System.out.println("HTTP Body : " + response.toString());

            jsonObject = (JSONObject) jsonParser.parse(response.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonObject;
    }


`,
            code_2_4: `
.env.json
    {
        "CST_ID" : "test", //발급받은 비밀키. 유출에 주의하시기 바랍니다.
        "CUST_KEY" : "abcd1234567890",
        "PCD_PAY_WORK": "AUTHREG",
        "PCD_PAY_TYPE": "card",
        "URL" : "https://testcpay.payple.kr/php/auth.php"
    }
    
    app.js
    /*
    * 가맹점인증 요청 REST
    */
    app.post('/auth', (req, res) => {
    
        /* 
        * process.env.URL
        * TEST : https://testcpay.payple.kr/php/auth.php
        * REAL : https://cpay.payple.kr/php/auth.php 
        */
        let url = process.env.URL,
            params = {
                cst_id  : process.env.CST_ID || '',
                custKey : process.env.CUST_KEY || '',
                PCD_PAY_WORK : process.env.PCD_PAY_WORK || '',
                PCD_PAY_TYPE : process.env.PCD_PAY_TYPE || ''
            }
    
    
        post(url, JSON.stringify(params), {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(r => res.json( {  ...r.data }))
            .catch(err => console.error(err))
    })


`,
            code_3_1: `
/*
    * TEST : https://testcpay.payple.kr
    * REAL : https://cpay.payple.kr
    */
    POST /php/auth.php HTTP/1.1
    Host: testcpay.payple.kr
    Content-Type: application/json
    Cache-Control: no-cache
    {
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_WORK": "AUTHREG"
    }
`,
            code_3_2: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    header("Expires: Mon 26 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d, M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0; pre-check=0", false);
    header("Pragma: no-cache");
    header("Content-type: application/json; charset=utf-8");
    
    // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
    $post_data = array (
        "cst_id" => "test",
        "custKey" => "abcd1234567890",
        "PCD_PAY_TYPE" => "card",
        "PCD_PAY_WORK": "AUTHREG"
    );
    
    $ch = curl_init('https://testcpay.payple.kr/php/auth.php');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data));

    ob_start();
    $response = curl_exec ($ch);
    $buffer = ob_get_contents();
    ob_end_clean();

    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    curl_close ($ch);
    if($status_code == 200) {
        echo $buffer;
    }


`,
            code_3_3: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    @ResponseBody
    @PostMapping(value = "/auth")
    public JSONObject payAuth() {
        JSONObject jsonObject = new JSONObject();
        JSONParser jsonParser = new JSONParser();
        try {

            String pURL = "https://testcpay.payple.kr/php/auth.php";
            // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
            String cst_id = "test";
            String cust_key = "abcd1234567890";
            String PCD_PAY_TYPE = "card";
            String PCD_PAY_WORK = "AUTHREG";

            JSONObject obj = new JSONObject();
            obj.put("cst_id", cst_id);
            obj.put("custKey", cust_key);
            obj.put("PCD_PAY_TYPE", PCD_PAY_TYPE);
            obj.put("PCD_PAY_WORK", PCD_PAY_WORK);

            URL url = new URL(pURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod("POST");
            con.setRequestProperty("content-type", "application/json");
            con.setDoOutput(true);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(obj.toString());
            wr.flush();
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();

            // System.out.println("HTTP 응답 코드 : " + responseCode);
            // System.out.println("HTTP Body : " + response.toString());

            jsonObject = (JSONObject) jsonParser.parse(response.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonObject;
    }


`,
            code_3_4: `
.env.json
    {
        "CST_ID" : "test", //발급받은 비밀키. 유출에 주의하시기 바랍니다.
        "CUST_KEY" : "abcd1234567890",
        "PCD_PAY_WORK": "AUTHREG",
        "PCD_PAY_TYPE": "card",
        "URL" : "https://testcpay.payple.kr/php/auth.php"
    }
    
    app.js
    /*
    * 가맹점인증 요청 REST
    */
    app.post('/auth', (req, res) => {
    
        /* 
        * process.env.URL
        * TEST : https://testcpay.payple.kr/php/auth.php
        * REAL : https://cpay.payple.kr/php/auth.php 
        */
        let url = process.env.URL,
            params = {
                cst_id  : process.env.CST_ID || '',
                custKey : process.env.CUST_KEY || '',
                PCD_PAY_WORK : process.env.PCD_PAY_WORK || '',
                PCD_PAY_TYPE : process.env.PCD_PAY_TYPE || ''
            }
    
    
        post(url, JSON.stringify(params), {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(r => res.json( {  ...r.data }))
            .catch(err => console.error(err))
    })


`,
            code_4_1: `
/*
    * TEST : https://testcpay.payple.kr
    * REAL : https://cpay.payple.kr
    */
    POST /php/auth.php HTTP/1.1
    Host: testcpay.payple.kr
    Content-Type: application/json
    Cache-Control: no-cache
    {
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_WORK": "AUTHREG"
    }
`,
            code_4_2: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    header("Expires: Mon 26 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d, M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0; pre-check=0", false);
    header("Pragma: no-cache");
    header("Content-type: application/json; charset=utf-8");
    
    // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
    $post_data = array (
        "cst_id" => "test",
        "custKey" => "abcd1234567890",
        "PCD_PAY_TYPE" => "card",
        "PCD_PAY_WORK": "AUTHREG"
    );
    
    $ch = curl_init('https://testcpay.payple.kr/php/auth.php');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data));

    ob_start();
    $response = curl_exec ($ch);
    $buffer = ob_get_contents();
    ob_end_clean();

    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    curl_close ($ch);
    if($status_code == 200) {
        echo $buffer;
    }


`,
            code_4_3: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    @ResponseBody
    @PostMapping(value = "/auth")
    public JSONObject payAuth() {
        JSONObject jsonObject = new JSONObject();
        JSONParser jsonParser = new JSONParser();
        try {

            String pURL = "https://testcpay.payple.kr/php/auth.php";
            // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
            String cst_id = "test";
            String cust_key = "abcd1234567890";
            String PCD_PAY_TYPE = "card";
            String PCD_PAY_WORK = "AUTHREG";

            JSONObject obj = new JSONObject();
            obj.put("cst_id", cst_id);
            obj.put("custKey", cust_key);
            obj.put("PCD_PAY_TYPE", PCD_PAY_TYPE);
            obj.put("PCD_PAY_WORK", PCD_PAY_WORK);

            URL url = new URL(pURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod("POST");
            con.setRequestProperty("content-type", "application/json");
            con.setDoOutput(true);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(obj.toString());
            wr.flush();
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();

            // System.out.println("HTTP 응답 코드 : " + responseCode);
            // System.out.println("HTTP Body : " + response.toString());

            jsonObject = (JSONObject) jsonParser.parse(response.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonObject;
    }


`,
            code_4_4: `
.env.json
    {
        "CST_ID" : "test", //발급받은 비밀키. 유출에 주의하시기 바랍니다.
        "CUST_KEY" : "abcd1234567890",
        "PCD_PAY_WORK": "AUTHREG",
        "PCD_PAY_TYPE": "card",
        "URL" : "https://testcpay.payple.kr/php/auth.php"
    }
    
    app.js
    /*
    * 가맹점인증 요청 REST
    */
    app.post('/auth', (req, res) => {
    
        /* 
        * process.env.URL
        * TEST : https://testcpay.payple.kr/php/auth.php
        * REAL : https://cpay.payple.kr/php/auth.php 
        */
        let url = process.env.URL,
            params = {
                cst_id  : process.env.CST_ID || '',
                custKey : process.env.CUST_KEY || '',
                PCD_PAY_WORK : process.env.PCD_PAY_WORK || '',
                PCD_PAY_TYPE : process.env.PCD_PAY_TYPE || ''
            }
    
    
        post(url, JSON.stringify(params), {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(r => res.json( {  ...r.data }))
            .catch(err => console.error(err))
    })


`,
            code_5_1: `
/*
    * TEST : https://testcpay.payple.kr
    * REAL : https://cpay.payple.kr
    */
    POST /php/auth.php HTTP/1.1
    Host: testcpay.payple.kr
    Content-Type: application/json
    Cache-Control: no-cache
    {
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_WORK": "AUTHREG"
    }
`,
            code_5_2: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    header("Expires: Mon 26 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d, M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0; pre-check=0", false);
    header("Pragma: no-cache");
    header("Content-type: application/json; charset=utf-8");
    
    // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
    $post_data = array (
        "cst_id" => "test",
        "custKey" => "abcd1234567890",
        "PCD_PAY_TYPE" => "card",
        "PCD_PAY_WORK": "AUTHREG"
    );
    
    $ch = curl_init('https://testcpay.payple.kr/php/auth.php');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data));

    ob_start();
    $response = curl_exec ($ch);
    $buffer = ob_get_contents();
    ob_end_clean();

    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    curl_close ($ch);
    if($status_code == 200) {
        echo $buffer;
    }


`,
            code_5_3: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    @ResponseBody
    @PostMapping(value = "/auth")
    public JSONObject payAuth() {
        JSONObject jsonObject = new JSONObject();
        JSONParser jsonParser = new JSONParser();
        try {

            String pURL = "https://testcpay.payple.kr/php/auth.php";
            // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
            String cst_id = "test";
            String cust_key = "abcd1234567890";
            String PCD_PAY_TYPE = "card";
            String PCD_PAY_WORK = "AUTHREG";

            JSONObject obj = new JSONObject();
            obj.put("cst_id", cst_id);
            obj.put("custKey", cust_key);
            obj.put("PCD_PAY_TYPE", PCD_PAY_TYPE);
            obj.put("PCD_PAY_WORK", PCD_PAY_WORK);

            URL url = new URL(pURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod("POST");
            con.setRequestProperty("content-type", "application/json");
            con.setDoOutput(true);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(obj.toString());
            wr.flush();
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();

            // System.out.println("HTTP 응답 코드 : " + responseCode);
            // System.out.println("HTTP Body : " + response.toString());

            jsonObject = (JSONObject) jsonParser.parse(response.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonObject;
    }


`,
            code_5_4: `
.env.json
    {
        "CST_ID" : "test", //발급받은 비밀키. 유출에 주의하시기 바랍니다.
        "CUST_KEY" : "abcd1234567890",
        "PCD_PAY_WORK": "AUTHREG",
        "PCD_PAY_TYPE": "card",
        "URL" : "https://testcpay.payple.kr/php/auth.php"
    }
    
    app.js
    /*
    * 가맹점인증 요청 REST
    */
    app.post('/auth', (req, res) => {
    
        /* 
        * process.env.URL
        * TEST : https://testcpay.payple.kr/php/auth.php
        * REAL : https://cpay.payple.kr/php/auth.php 
        */
        let url = process.env.URL,
            params = {
                cst_id  : process.env.CST_ID || '',
                custKey : process.env.CUST_KEY || '',
                PCD_PAY_WORK : process.env.PCD_PAY_WORK || '',
                PCD_PAY_TYPE : process.env.PCD_PAY_TYPE || ''
            }
    
    
        post(url, JSON.stringify(params), {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(r => res.json( {  ...r.data }))
            .catch(err => console.error(err))
    })


`,
            code_6_1: `
/*
    * TEST : https://testcpay.payple.kr
    * REAL : https://cpay.payple.kr
    */
    POST /php/auth.php HTTP/1.1
    Host: testcpay.payple.kr
    Content-Type: application/json
    Cache-Control: no-cache
    {
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_WORK": "AUTHREG"
    }
`,
            code_6_2: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    header("Expires: Mon 26 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d, M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0; pre-check=0", false);
    header("Pragma: no-cache");
    header("Content-type: application/json; charset=utf-8");
    
    // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
    $post_data = array (
        "cst_id" => "test",
        "custKey" => "abcd1234567890",
        "PCD_PAY_TYPE" => "card",
        "PCD_PAY_WORK": "AUTHREG"
    );
    
    $ch = curl_init('https://testcpay.payple.kr/php/auth.php');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data));

    ob_start();
    $response = curl_exec ($ch);
    $buffer = ob_get_contents();
    ob_end_clean();

    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    curl_close ($ch);
    if($status_code == 200) {
        echo $buffer;
    }


`,
            code_6_3: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    @ResponseBody
    @PostMapping(value = "/auth")
    public JSONObject payAuth() {
        JSONObject jsonObject = new JSONObject();
        JSONParser jsonParser = new JSONParser();
        try {

            String pURL = "https://testcpay.payple.kr/php/auth.php";
            // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
            String cst_id = "test";
            String cust_key = "abcd1234567890";
            String PCD_PAY_TYPE = "card";
            String PCD_PAY_WORK = "AUTHREG";

            JSONObject obj = new JSONObject();
            obj.put("cst_id", cst_id);
            obj.put("custKey", cust_key);
            obj.put("PCD_PAY_TYPE", PCD_PAY_TYPE);
            obj.put("PCD_PAY_WORK", PCD_PAY_WORK);

            URL url = new URL(pURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod("POST");
            con.setRequestProperty("content-type", "application/json");
            con.setDoOutput(true);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(obj.toString());
            wr.flush();
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();

            // System.out.println("HTTP 응답 코드 : " + responseCode);
            // System.out.println("HTTP Body : " + response.toString());

            jsonObject = (JSONObject) jsonParser.parse(response.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonObject;
    }


`,
            code_6_4: `
.env.json
    {
        "CST_ID" : "test", //발급받은 비밀키. 유출에 주의하시기 바랍니다.
        "CUST_KEY" : "abcd1234567890",
        "PCD_PAY_WORK": "AUTHREG",
        "PCD_PAY_TYPE": "card",
        "URL" : "https://testcpay.payple.kr/php/auth.php"
    }
    
    app.js
    /*
    * 가맹점인증 요청 REST
    */
    app.post('/auth', (req, res) => {
    
        /* 
        * process.env.URL
        * TEST : https://testcpay.payple.kr/php/auth.php
        * REAL : https://cpay.payple.kr/php/auth.php 
        */
        let url = process.env.URL,
            params = {
                cst_id  : process.env.CST_ID || '',
                custKey : process.env.CUST_KEY || '',
                PCD_PAY_WORK : process.env.PCD_PAY_WORK || '',
                PCD_PAY_TYPE : process.env.PCD_PAY_TYPE || ''
            }
    
    
        post(url, JSON.stringify(params), {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(r => res.json( {  ...r.data }))
            .catch(err => console.error(err))
    })


`,
            code_7_1: `
/*
    * TEST : https://testcpay.payple.kr
    * REAL : https://cpay.payple.kr
    */
    POST /php/auth.php HTTP/1.1
    Host: testcpay.payple.kr
    Content-Type: application/json
    Cache-Control: no-cache
    {
    "cst_id": "test",
    "custKey": "abcd1234567890",
    "PCD_PAY_TYPE": "card",
    "PCD_PAY_WORK": "AUTHREG"
    }
`,
            code_7_2: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    header("Expires: Mon 26 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d, M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0; pre-check=0", false);
    header("Pragma: no-cache");
    header("Content-type: application/json; charset=utf-8");
    
    // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
    $post_data = array (
        "cst_id" => "test",
        "custKey" => "abcd1234567890",
        "PCD_PAY_TYPE" => "card",
        "PCD_PAY_WORK": "AUTHREG"
    );
    
    $ch = curl_init('https://testcpay.payple.kr/php/auth.php');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data));

    ob_start();
    $response = curl_exec ($ch);
    $buffer = ob_get_contents();
    ob_end_clean();

    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    curl_close ($ch);
    if($status_code == 200) {
        echo $buffer;
    }


`,
            code_7_3: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    @ResponseBody
    @PostMapping(value = "/auth")
    public JSONObject payAuth() {
        JSONObject jsonObject = new JSONObject();
        JSONParser jsonParser = new JSONParser();
        try {

            String pURL = "https://testcpay.payple.kr/php/auth.php";
            // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
            String cst_id = "test";
            String cust_key = "abcd1234567890";
            String PCD_PAY_TYPE = "card";
            String PCD_PAY_WORK = "AUTHREG";

            JSONObject obj = new JSONObject();
            obj.put("cst_id", cst_id);
            obj.put("custKey", cust_key);
            obj.put("PCD_PAY_TYPE", PCD_PAY_TYPE);
            obj.put("PCD_PAY_WORK", PCD_PAY_WORK);

            URL url = new URL(pURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod("POST");
            con.setRequestProperty("content-type", "application/json");
            con.setDoOutput(true);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(obj.toString());
            wr.flush();
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();

            // System.out.println("HTTP 응답 코드 : " + responseCode);
            // System.out.println("HTTP Body : " + response.toString());

            jsonObject = (JSONObject) jsonParser.parse(response.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonObject;
    }


`,
            code_7_4: `
.env.json
    {
        "CST_ID" : "test", //발급받은 비밀키. 유출에 주의하시기 바랍니다.
        "CUST_KEY" : "abcd1234567890",
        "PCD_PAY_WORK": "AUTHREG",
        "PCD_PAY_TYPE": "card",
        "URL" : "https://testcpay.payple.kr/php/auth.php"
    }
    
    app.js
    /*
    * 가맹점인증 요청 REST
    */
    app.post('/auth', (req, res) => {
    
        /* 
        * process.env.URL
        * TEST : https://testcpay.payple.kr/php/auth.php
        * REAL : https://cpay.payple.kr/php/auth.php 
        */
        let url = process.env.URL,
            params = {
                cst_id  : process.env.CST_ID || '',
                custKey : process.env.CUST_KEY || '',
                PCD_PAY_WORK : process.env.PCD_PAY_WORK || '',
                PCD_PAY_TYPE : process.env.PCD_PAY_TYPE || ''
            }
    
    
        post(url, JSON.stringify(params), {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(r => res.json( {  ...r.data }))
            .catch(err => console.error(err))
    })


`,
            code_8_1: `
{
    "server_name” => 요청 URL
    "result” => 결과확인,
    “result_msg” => 결과 메시지,
    “cst_id” => 가맹점 아이디,
    “custKey” => 가맹점 키,
    “AuthKey” => 가맹점인증토큰,
    “PCD_PAY_HOST” => 결제요청 도메인, (예: https://testcpay.payple.kr)
    “PCD_PAY_URL” => 결제요청 URI, (예: /auth.php)
    “return_url” => 결제요청 URI (PCD_PAY_HOST + PCD_PAY_URL)
}
`,
            code_8_2: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    header("Expires: Mon 26 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d, M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0; pre-check=0", false);
    header("Pragma: no-cache");
    header("Content-type: application/json; charset=utf-8");
    
    // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
    $post_data = array (
        "cst_id" => "test",
        "custKey" => "abcd1234567890",
        "PCD_PAY_TYPE" => "card",
        "PCD_PAY_WORK": "AUTHREG"
    );
    
    $ch = curl_init('https://testcpay.payple.kr/php/auth.php');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data));

    ob_start();
    $response = curl_exec ($ch);
    $buffer = ob_get_contents();
    ob_end_clean();

    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    curl_close ($ch);
    if($status_code == 200) {
        echo $buffer;
    }


`,
            code_8_3: `
/* 
    * TEST : https://testcpay.payple.kr/php/auth.php
    * REAL : https://cpay.payple.kr/php/auth.php 
    */
    @ResponseBody
    @PostMapping(value = "/auth")
    public JSONObject payAuth() {
        JSONObject jsonObject = new JSONObject();
        JSONParser jsonParser = new JSONParser();
        try {

            String pURL = "https://testcpay.payple.kr/php/auth.php";
            // 발급받은 비밀키. 유출에 주의하시기 바랍니다.
            String cst_id = "test";
            String cust_key = "abcd1234567890";
            String PCD_PAY_TYPE = "card";
            String PCD_PAY_WORK = "AUTHREG";

            JSONObject obj = new JSONObject();
            obj.put("cst_id", cst_id);
            obj.put("custKey", cust_key);
            obj.put("PCD_PAY_TYPE", PCD_PAY_TYPE);
            obj.put("PCD_PAY_WORK", PCD_PAY_WORK);

            URL url = new URL(pURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod("POST");
            con.setRequestProperty("content-type", "application/json");
            con.setDoOutput(true);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(obj.toString());
            wr.flush();
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();

            // System.out.println("HTTP 응답 코드 : " + responseCode);
            // System.out.println("HTTP Body : " + response.toString());

            jsonObject = (JSONObject) jsonParser.parse(response.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonObject;
    }


`,
            code_8_4: `
.env.json
    {
        "CST_ID" : "test", //발급받은 비밀키. 유출에 주의하시기 바랍니다.
        "CUST_KEY" : "abcd1234567890",
        "PCD_PAY_WORK": "AUTHREG",
        "PCD_PAY_TYPE": "card",
        "URL" : "https://testcpay.payple.kr/php/auth.php"
    }
    
    app.js
    /*
    * 가맹점인증 요청 REST
    */
    app.post('/auth', (req, res) => {
    
        /* 
        * process.env.URL
        * TEST : https://testcpay.payple.kr/php/auth.php
        * REAL : https://cpay.payple.kr/php/auth.php 
        */
        let url = process.env.URL,
            params = {
                cst_id  : process.env.CST_ID || '',
                custKey : process.env.CUST_KEY || '',
                PCD_PAY_WORK : process.env.PCD_PAY_WORK || '',
                PCD_PAY_TYPE : process.env.PCD_PAY_TYPE || ''
            }
    
    
        post(url, JSON.stringify(params), {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(r => res.json( {  ...r.data }))
            .catch(err => console.error(err))
    })


`,
            code_9_1: `
{
    "server_name” => 요청 URL
    "result” => 결과확인,
    “result_msg” => 결과 메시지,
    “cst_id” => 가맹점 아이디,
    “custKey” => 가맹점 키,
    “AuthKey” => 가맹점인증토큰,
    “PCD_PAY_HOST” => 결제요청 도메인, (예: https://testcpay.payple.kr)
    “PCD_PAY_URL” => 결제요청 URI, (예: /auth.php)
    “return_url” => 결제요청 URI (PCD_PAY_HOST + PCD_PAY_URL)
}
`,
        };
    },
};
</script>
