using System;
using System.Collections.Generic;

namespace HealthCareApp.Models;

public partial class Doctor
{
    public int Doctorid { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string? Phonenumber { get; set; }

    public string? Email { get; set; }

    public string Gender { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string? Image { get; set; }

    public string Specialization { get; set; } = null!;

    public string Education { get; set; } = null!;

    public int? DoctorLoginId { get; set; }

    public string? City { get; set; }

    public string? Pincode { get; set; }

    public string? State { get; set; }

    public virtual ICollection<AppointmentTime> AppointmentTimes { get; set; } = new List<AppointmentTime>();

    public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();

    public virtual LoginTable? DoctorLogin { get; set; }

    public virtual ICollection<Prescription> Prescriptions { get; set; } = new List<Prescription>();
}
