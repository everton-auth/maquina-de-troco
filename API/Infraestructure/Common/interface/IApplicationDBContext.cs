namespace Infraestructure.Common;

public interface IApplicationDBContext {


    Task<int> SaveChangesAsync( CancellationToken cancellationToken );
}