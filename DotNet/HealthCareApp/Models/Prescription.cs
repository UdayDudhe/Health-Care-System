using System;
using System.Collections.Generic;

namespace HealthCareApp.Models;

public partial class Prescription
{
    public int PrescId { get; set; }

    public int PatientId { get; set; }

    public int DoctorId { get; set; }

    public DateTime? DateTime { get; set; }

    public virtual Doctor Doctor { get; set; } = null!;

    public virtual ICollection<MedicinePrescriptionTable> MedicinePrescriptionTables { get; set; } = new List<MedicinePrescriptionTable>();

    public virtual Patient Patient { get; set; } = null!;
}
