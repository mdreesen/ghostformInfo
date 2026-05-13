<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { Lead } from '~/types/lead';

const UBadge = resolveComponent('UBadge');

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true
  },
});

const columns: TableColumn<Lead>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const color = {
        new: 'info' as const,
        archived: 'neutral' as const,
        active: 'success' as const
      }[row.getValue('status') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
        row.getValue('status')
      )
    }
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
    accessorKey: 'want_to_move',
    header: 'Looking to move',
  },
  {
    accessorKey: 'buy_sell_both',
    header: 'Buy, Sell, or Both',
  },
  {
    accessorKey: 'price',
    header: 'Estimated home price',
  },
  {
    accessorKey: 'sqft',
    header: 'Sqft',
  },
  {
    accessorKey: 'bedrooms',
    header: 'Bedrooms',
  },
  {
    accessorKey: 'bathrooms',
    header: 'Bathrooms',
  },
  {
    accessorKey: 'budget',
    header: 'Budget',
  },
]

const table = useTemplateRef('table')

const columnFilters = ref([
  {
    id: 'email',
    value: ''
  }
]);
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

    <UTable ref="table" v-model:column-filters="columnFilters" :data="data" :columns="columns">
      <template #email-cell="{ row }">
      <NuxtLink 
        :to="`/dashboard/leads/${row.original._id}/details`"
        class="text-cyan-400 hover:text-cyan-700 underline font-medium"
      >
      {{ row.original.email }}
      </NuxtLink>
    </template>
    </UTable>
  </div>
</template>
