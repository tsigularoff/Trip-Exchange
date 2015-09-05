namespace TripExchange.Models
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System.Collections.Generic;
    using System.Security.Claims;
    using System.Threading.Tasks;

    public class ApplicationUser : IdentityUser
    {
        public ICollection<Trip> trips;
        public ICollection<Trip> tripsAsDriver;

        public ApplicationUser()
        {
            this.trips = new HashSet<Trip>();
            this.tripsAsDriver = new HashSet<Trip>();
        }

        public virtual ICollection<Trip> Trips
        {
            get { return this.trips; }
            set { this.trips = value; }
        }

        public virtual ICollection<Trip> TripsAsDriver
        {
            get { return this.tripsAsDriver; }
            set { this.tripsAsDriver = value; }
        }

        public bool IsDriver { get; set; }

        public string Car { get; set; }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }


    }
}
