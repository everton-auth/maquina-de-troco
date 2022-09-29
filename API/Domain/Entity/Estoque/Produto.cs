using System.ComponentModel.DataAnnotations;

namespace Domain.Entity.Estoque;

public class Produto {
    [Key]
    public int ID { get; set; }
    public string DS_Descricao { get; set; }
    public string DS_Lote { get; set; }
    public DateTime DT_Validade { get; set; }
    public int QT_Quantidade { get; set; }
    public int QT_UltimaQuantidade { get; set; }
    public string DS_CodBarras { get; set; }
}