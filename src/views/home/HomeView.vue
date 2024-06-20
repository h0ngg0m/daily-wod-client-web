<template>
  <div class="pa-2">
    <v-card class="d-flex flex-column" variant="tonal">
      <v-card-title class="text-h6">2024 01 01 WOD!</v-card-title>
      <v-card-text
        >For time of (Time CAP: 10min)<br /><br />21 - 15 - 9<br />Thruster (95lb/65lb)<br />
        Pull-up<br /><br />
        A<br />85lb/55lb<br /><br />
        B<br />75lb/45lb<br /><br />
        C<br />-/-
      </v-card-text>
      <v-card-actions>
        <v-btn block color="green" variant="outlined">
          <v-icon left>mdi-pencil</v-icon>
          기록 작성하기!
        </v-btn>
        <!--        <v-btn color="red" variant="outlined">-->
        <!--          <v-icon left>mdi-pencil</v-icon>기록 수정하기!-->
        <!--        </v-btn>-->
      </v-card-actions>
    </v-card>

    <!--    <v-card class="d-flex flex-column mt-2" variant="tonal">-->
    <!--      <v-card-title class="text-h6">2024 01 01 오늘의 순위!</v-card-title>-->
    <!--      <v-data-iterator :items="items">-->
    <!--        <template #default="{ items }">-->
    <!--          <template v-for="(item, i) in items" :key="i">-->
    <!--            <h1>{{ item.raw.rank }}</h1>-->
    <!--            <h1>{{ item.raw.username }}</h1>-->
    <!--            <h1>{{ item.raw.record }}</h1>-->
    <!--            <h1>{{ item.raw.box }}</h1>-->
    <!--          </template>-->
    <!--        </template>-->
    <!--      </v-data-iterator>-->
    <!--      <v-card-actions>-->
    <!--        <v-btn block color="green" variant="outlined">-->
    <!--          <v-icon left>mdi-text-search-variant</v-icon>전체 순위 보기!-->
    <!--        </v-btn>-->
    <!--      </v-card-actions>-->
    <!--    </v-card>-->
  </div>
</template>
<script setup lang="ts">
import { getApi } from '@/utils/api'
import { onBeforeMount } from 'vue'

async function getWod(): Promise<void> {
  const response = await getApi('/api/v1/wods/daily')
  // if (response.status === 200 && response.data.code === 'S000') {
  //   items.value = response.data.data
  // }
}

// const items = [
//   { username: 'hong', rank: '1', record: '10:00', box: 'crossfit_ultimate' },
//   { username: 'kim', rank: '2', record: '10:30', box: 'crossfit_gangnam' },
//   { username: 'lee', rank: '3', record: '11:00', box: 'crossfit_sweethome' },
//   { username: 'park', rank: '4', record: '11:30', box: 'crossfit_woori' }
// ]

onBeforeMount(async () => {
  await getWod()
})
</script>
