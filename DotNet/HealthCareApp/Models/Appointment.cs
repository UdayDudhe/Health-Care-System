using System;
using System.Collections.Generic;

namespace HealthCareApp.Models;

public partial class Appointment
{
    public int ApId { get; set; }

    public int PatientId { get; set; }

    public int DoctorId { get; set; }

    public string AppointmentDate { get; set; } = null!;

    public string AppointmentTime { get; set; } = null!;

    public string? Notes { get; set; }

    public string Status { get; set; } = null!;

    public string? Prescription { get; set; }

    public virtual Doctor Doctor { get; set; } = null!;

    public virtual Patient Patient { get; set; } = null!;
}
