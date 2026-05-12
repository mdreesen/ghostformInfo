<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'

const UBadge = resolveComponent('UBadge');

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true
  },
});

type Lead = {
  // id: string;
  name: string;
  date: string
  status: 'new' | 'active' | 'closed'
  email: string
}

const columns: TableColumn<Lead>[] = [
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const color = {
        paid: 'success' as const,
        failed: 'error' as const,
        refunded: 'neutral' as const
      }[row.getValue('status') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
        row.getValue('status')
      )
    }
  },
]

const table = useTemplateRef('table')

const columnFilters = ref([
  {
    id: 'email',
    value: ''
  }
])
</script>

<template>
  <div class="flex flex-col flex-1 w-full p-5">
    <div class="flex px-4 py-3.5 border-b border-accented">
      <UInput
        :model-value="table?.tableApi?.getColumn('email')?.getFilterValue() as string"
        class="max-w-sm"
        placeholder="Filter emails..."
        @update:model-value="table?.tableApi?.getColumn('email')?.setFilterValue($event)"
      />
    </div>

    <UTable ref="table" v-model:column-filters="columnFilters" :data="data" :columns="columns"></UTable>
  </div>
</template>
