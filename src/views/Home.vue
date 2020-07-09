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
            환영합니다. 페이플 결제 연동개발을 위한 메뉴얼입니다
        </p>
        <article class="mb-12">
            <p class="pl-2">
                <router-link to="/ui/outline">개요</router-link>
            </p>
        </article>
        <v-divider class="mb-12"></v-divider>
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
