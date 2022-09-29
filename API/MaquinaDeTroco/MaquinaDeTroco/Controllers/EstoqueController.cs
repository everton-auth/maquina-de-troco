using Application.Estoque.Commands;
using Domain.Entity.Estoque;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[Route( "estoque" )]
public class EstoqueController : APIControllerBase {
    private readonly ILogger _logger;

    public EstoqueController( ILogger<EstoqueController> logger ) {
        _logger = logger;
    }

    [HttpPost]
    public async Task<List<Produto>> AdicionarProdutos( [FromBody] AdicionarProdutosEstoqueCommand command ) {
        return await this.Mediator.Send( command );
    }
}
