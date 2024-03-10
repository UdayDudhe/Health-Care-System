using System;
using System.Collections.Generic;

namespace HealthCareApp.Models;

public partial class MedicinePrescriptionTable
{
    public int PreMedId { get; set; }

    public int PreId { get; set; }

    public int MedId { get; set; }

    public string? Morning { get; set; }

    public string? Afternoon { get; set; }

    public string? Evening { get; set; }

    public virtual Medicine Med { get; set; } = null!;

    public virtual Prescription Pre { get; set; } = null!;
}
