using Domain.Entity.Estoque;
using Microsoft.EntityFrameworkCore;

namespace Infraestructure.Common;

public interface IApplicationDBContext {

    Task<int> SaveChangesAsync( CancellationToken cancellationToken );

    //
    //
    //

    DbSet<Produto> Produtos { get; }
}