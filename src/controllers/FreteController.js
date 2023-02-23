/* eslint-disable radix */
import ApiNodeCorreios from 'node-correios';

export default async (req, res) => {
  try {
    const correios = new ApiNodeCorreios();
    const {
      sCepDestino, sCepOrigem, nVlPeso, nCdFormato, nVlComprimento, nVlAltura,
      nVlLargura, sCdMaoPropria, nVlValorDeclarado, CdAvisoRecebimento, nCdServico, nVlDiametro,
    } = req.body;

    const result = await correios.calcPrecoPrazo({
      sCepDestino,
      sCepOrigem,
      nVlPeso,
      nCdFormato,
      nVlComprimento,
      nVlAltura,
      nVlLargura,
      sCdMaoPropria,
      nVlValorDeclarado,
      CdAvisoRecebimento,
      nCdServico,
      nVlDiametro,
    }).then((response) => response);
    return res.status(200).json([result]);
  } catch (err) {
    return res.status(400).json({
      errors: err,
    });
  }
};
