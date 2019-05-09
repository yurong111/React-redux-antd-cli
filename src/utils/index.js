export function parsePagination(meta) {
  let defaultPagination = {
    showQuickJumper: true,
    showSizeChanger: true,
    total: 10,
    current: 1,
    pageSize: 20,
  }

  return {
    ...defaultPagination,
    total: meta.total_count,
    current: meta.offset + 1,
    pageSize: meta.limit,
  }
}
