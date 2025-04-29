const PDFDocument = require("pdfkit");

const heroisModel = require("../models/heroisModel");

const exportHeroisPDF = async (req, res) => {
    try {
        const herois = await heroisModel.getHerois();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=herois.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatorio de Herois", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Nome | Genero | Editora | Ano de Criação", {underline: true});
        doc.moveDown(0.5);

        //Add dados dos bruxos
       herois.forEach((herois) => {
            doc.text(
                `${herois.id} | ${herois.name} | ${herois.gender} | ${herois.editora_name} | ${herois.year_creation}`
            );
        });

        doc.end(); 
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF", error}); 
    }
};

module.exports = { exportHeroisPDF };