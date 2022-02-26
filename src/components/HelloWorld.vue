<script setup lang="ts">
import {useStore} from '@/store/main'
const store = useStore()

defineProps<{msg: string}>()

</script>

<template>
    <q-layout view="lHh lpr lFf" container style="height: 100vh">
        <q-header elevated>
            <q-toolbar>
                <q-btn flat round dense icon="menu" class="q-mr-sm" />
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
                </q-avatar>

                <q-toolbar-title>{{msg}}</q-toolbar-title>

                <q-btn flat round dense icon="whatshot" />
            </q-toolbar>
        </q-header>

        <q-footer elevated>
            <q-toolbar>
                <q-toolbar-title>Footer</q-toolbar-title>
            </q-toolbar>
        </q-footer>

        <q-page-container>
            <q-btn color="primary" icon="check" :label="'count: ' + store.counter" @click="store.increment" />
            <q-page class="q-pa-md">
                <p v-for="n in 15" :key="n">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a
                    adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam
                    rerum delectus commodi perferendis voluptate?
                </p>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
