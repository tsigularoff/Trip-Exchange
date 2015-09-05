namespace TripExchange.Data
{
    using System.Data.Entity;
    using Microsoft.AspNet.Identity.EntityFramework;
   
    
    using TripExchange.Models;
    using TripExchange.Data.Migrations;

    
    public class TripExchangeDbContext : IdentityDbContext<ApplicationUser>
    {
        public TripExchangeDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<TripExchangeDbContext, Configuration>());  
        }

        public static TripExchangeDbContext Create()
        {
            return new TripExchangeDbContext();
        }

        public virtual IDbSet<Trip> Trips { get; set; }

        public virtual IDbSet<City> Cities { get; set; }
    }
}
