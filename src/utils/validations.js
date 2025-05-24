export function isPasoCompleto(formData, paso) {
  switch (paso) {
    case 2:
      return Boolean(formData.paso1);
    case 3:
      return Boolean(formData.paso1 && formData.paso2);
    case 4:
      return Boolean(formData.paso1 && formData.paso2 && formData.paso3);
    default:
      return true;
  }
}
