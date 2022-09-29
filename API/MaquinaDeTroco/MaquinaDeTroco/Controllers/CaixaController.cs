using Application.Caixa.Commands;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[Route( "caixa" )]
public class CaixaController : APIControllerBase {
    private ILogger _logger;

    public CaixaController( ILogger<CaixaController> logger ) {
        _logger = logger;
    }

    [HttpPost( "" )]
    public async Task<List<string>> RegistrarListaDeCompras( [FromBody] ConsumirComprasCommand command ) {
        return await this.Mediator.Send( command );
    }
    //[HttpGet("historico")]
    //public async Task<List<>>
}
