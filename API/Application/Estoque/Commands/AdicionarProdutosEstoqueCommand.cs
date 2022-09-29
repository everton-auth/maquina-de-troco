
using Domain.Entity.Estoque;
using Infraestructure.Common;
using MediatR;

namespace Application.Estoque.Commands;
public class AdicionarProdutosEstoqueCommand : IRequest<List<Produto>> {
    public List<Produto> produtos { get; set; }
}
public class AdicionarProdutosEstoqueCommandHandler : IRequestHandler<AdicionarProdutosEstoqueCommand , List<Produto>> {
    private readonly IApplicationDBContext _context;
    private readonly IMediator _mediator;

    public AdicionarProdutosEstoqueCommandHandler( IApplicationDBContext context , IMediator mediator ) {
        _context = context;
        _mediator = mediator;
    }

    public async Task<List<Produto>> Handle( AdicionarProdutosEstoqueCommand request , CancellationToken cancellationToken ) {
        await _context.Produtos.AddRangeAsync( request.produtos );
        await _context.SaveChangesAsync( cancellationToken );
        return request.produtos;
    }
}