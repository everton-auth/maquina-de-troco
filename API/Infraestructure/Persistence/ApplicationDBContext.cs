
using Infraestructure.Common;
using Microsoft.EntityFrameworkCore;

namespace Infraestructure.Persistence;
public class ApplicationDBContext : DbContext, IApplicationDBContext {

    public override async Task<int> SaveChangesAsync( CancellationToken cancellationToken = new CancellationToken() ) {
        var result = await base.SaveChangesAsync( cancellationToken );
        return result;
    }
}
