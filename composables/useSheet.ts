let sheetRange = "Sheet2!A2:D1000"

export async function allRows() {
  const { public: { gapiKey, sheetId } } = useRuntimeConfig()

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}?key=${gapiKey}`
  return await useFetch(url)
}

export async function singleRow(row: string) {
  const { public: { gapiKey, sheetId } } = useRuntimeConfig()

  const rowRange = `Sheet2!A${row}:D${row}`

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${rowRange}?key=${gapiKey}`
  return await useFetch(url)
}
