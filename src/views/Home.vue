<template>
    <div class="px-6 py-4">
        <!-- <v-breadcrumbs :items="subNavi" large class="px-0">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs> -->

        <h1 class="mt-2">
            Simple Payment For People!<br />
            We are Payple!
        </h1>
        <p class="mt-4 mb-12">
            페이플에서 제공하는 연동가이드 입니다. <br />
            가이드가 필요한 내용을 선택하시면 안내페이지로 접속됩니다.
        </p>

        <v-row class="mb-8">
            <v-col col="12" sm="6" class="align-stretch">
                <v-card raised col="12" sm="6" height="100%">
                    <v-card-text>
                        <p class="title text--primary">
                            환경설정
                        </p>

                        <v-row class="mb-8">
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/ui/install/outline">
                                    환경설정 개요
                                </v-btn>
                            </v-col>
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/ui/install/auth">
                                    상황별 인증 요청 방식
                                </v-btn>
                            </v-col>
                            <!-- <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/card/pay/app-card">앱카드결제</v-btn>
                            </v-col>
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/card/pay/link">링크결제</v-btn>
                            </v-col> -->
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col col="12" sm="6" class="align-stretch">
                <v-card raised col="12" sm="6" height="100%">
                    <v-card-text>
                        <p class="title text--primary">
                            API
                        </p>
                        <v-row class="mb-8">
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/ui/regist/card">
                                    카드등록
                                </v-btn>
                            </v-col>
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/ui/pay/request">
                                    결제요청
                                </v-btn>
                            </v-col>
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/ui/pay/cancel">
                                    승인취소
                                </v-btn>
                            </v-col>
                            <v-col col="12" sm="6" class="text-center">
                                <v-btn x-large block color="blue lighten-1" dark to="/ui/result/search">
                                    결제결과 조회
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subNavi: [
                {
                    text: "홈",
                    disabled: true,
                    to: "/",
                },
            ],
        };
    },
};
</script>
