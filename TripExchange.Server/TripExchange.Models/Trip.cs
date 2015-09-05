namespace TripExchange.Models
{
    using System;
    using System.Collections.Generic;
    
    public class Trip
    {
        private ICollection<ApplicationUser> passengers;

        public Trip()
        {
            this.passengers = new HashSet<ApplicationUser>();
        }
        public Guid Id { get; set; }

        public string DriverId { get; set; }

        public virtual ApplicationUser Driver { get; set; }

        public DateTime DepartureTime { get; set; }

        public City CityFrom { get; set; }

        public City CityTo { get; set; }

        public int AvailableSeats { get; set; }

        public virtual ICollection<ApplicationUser> Passengers
        {
            get { return this.passengers; }
            set { this.passengers = value; }
        }
    }
}
