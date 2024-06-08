// Utilities
import { defineStore } from 'pinia'
import { useStorage, RemovableRef } from '@vueuse/core'
import { computed } from 'vue'
import { DateTime, Interval } from 'luxon'


export const useAppStore = defineStore('app', () => {
  const lastSawWIPWarning: RemovableRef<DateTime> = useStorage('wip-warning', DateTime.now().minus({ years: 1 }))

  const wipWarningEnabled = computed<boolean>(() => {
    return Math.abs(
      Interval.fromDateTimes(lastSawWIPWarning.value, DateTime.now()).length('days')
    ) >= 1
  })

  async function clearWIPWarning(): Promise<undefined> {
    lastSawWIPWarning.value = DateTime.now()
  }

  return {
    lastSawWIPWarning,
    wipWarningEnabled,
    clearWIPWarning,
  }

})
