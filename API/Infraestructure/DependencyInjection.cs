using Infraestructure.Common;
using Infraestructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infraestructure;
public static class DependencyInjection {
    public static IServiceCollection AddInfrastructure( this IServiceCollection services , IConfiguration configuration ) {

        services.AddDbContext<ApplicationDBContext>( c =>
           c.UseInMemoryDatabase("caixa") );

        services.AddScoped<IApplicationDBContext>( provider => provider.GetRequiredService<ApplicationDBContext>() );
        return services;
    }
}