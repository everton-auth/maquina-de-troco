using Domain.Entity.Estoque;
using Infraestructure.Common;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Application.Caixa.Commands;
public class ConsumirComprasCommand : IRequest<List<string>> {
    public List<string> DS_CodigosDeBarras { get; set; }
}

public class ConsumirComprasCommandHandler : IRequestHandler<ConsumirComprasCommand , List<string>> {
    private readonly IApplicationDBContext _context;
    private readonly IMediator _mediator;

    public ConsumirComprasCommandHandler( IApplicationDBContext context , IMediator mediator ) {
        _context = context;
        _mediator = mediator;
    }

    public async Task<List<string>> Handle( ConsumirComprasCommand request , CancellationToken cancellationToken ) {
        var Produtos = await _context.Produtos.Where( b => request.DS_CodigosDeBarras.Contains( b.DS_CodBarras ) ).ToListAsync();
        if( Produtos.Where(b => b.DT_Validade < DateTime.Now).Count() > 0 ) 
            throw new 
    }
}