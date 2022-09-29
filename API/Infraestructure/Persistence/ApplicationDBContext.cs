
using Domain.Entity.Estoque;
using Infraestructure.Common;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace Infraestructure.Persistence;
public class ApplicationDBContext : DbContext, IApplicationDBContext {

    public ApplicationDBContext( DbContextOptions<ApplicationDBContext> options ) : base( options ) {

    }

    public override async Task<int> SaveChangesAsync( CancellationToken cancellationToken = new CancellationToken() ) {
        return await base.SaveChangesAsync( cancellationToken );
    }

    //
    //
    //  DBSETS |
    //         V
    //

    public DbSet<Produto> Produtos { get; set; }




    protected override void OnModelCreating( ModelBuilder modelBuilder ) {

    }
}
