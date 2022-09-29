using System.Net;

namespace Application.Commons.Exceptions;

public class NotFoundException : System.Exception {
    public virtual HttpStatusCode StatusCode { get; } = HttpStatusCode.NotFound;
    public virtual string Title { get; } = "Não Encontrado!";

    public NotFoundException()
      : base() {
    }

    public NotFoundException( string message )
      : base( message ) {
    }

    public NotFoundException( string message , System.Exception innerException )
      : base( message , innerException ) {
    }

    public NotFoundException( string name , object key )
      : base( $"O registro \"{name}\" ({key}) não foi encontrado." ) {
    }
}