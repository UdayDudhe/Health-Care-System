using System;
using System.Collections.Generic;

namespace HealthCareApp.Models;

public partial class Patient
{
    public int PatientId { get; set; }

    public int? PatientLoginId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Address { get; set; } = null!;

    public ulong PhoneNumber { get; set; }

    public string Gender { get; set; } = null!;

    public string EmailId { get; set; } = null!;

    public string City { get; set; } = null!;

    public long Pincode { get; set; }

    public string State { get; set; } = null!;

    public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();

    public virtual LoginTable? PatientLogin { get; set; }

    public virtual ICollection<Prescription> Prescriptions { get; set; } = new List<Prescription>();
}
