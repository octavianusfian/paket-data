export function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Rupiah typically doesn't use minor units
    maximumFractionDigits: 0,
  }).format(amount);
}
