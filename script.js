// Seleciona os elementos do formulário.
const amount = document.getElementById("amount");

// Captura o evento de input para formatar o valor.
amount.oninput = () => {
  // Obtém o valor atual do input e remove os caracteres não numéricos.
  let value = amount.value.replace(/\D/g, "");
  //OBS: ESTAMOS TENTANDO USAR A VARIÁVEL "value" o máximo possivel para não ter necessidade de criar outra.

  // Transforma o valor em centavos (exemplo: 150/100 = 1.5 que é equivalente a 1,50)
  value = Number(value) / 100;

  // Atualiza o valor do input.
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  // Formata o valor no padrão BRL (Real Brasileiro).
  value = value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  //Retorna o valor formatado.
  return value;
}
