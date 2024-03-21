using System;
using System.Collections.Generic;

namespace HealthCareApp.Models;

public partial class Medicine
{
    public int MedId { get; set; }

    public string MedName { get; set; } = null!;

    public virtual ICollection<MedicinePrescriptionTable> MedicinePrescriptionTables { get; set; } = new List<MedicinePrescriptionTable>();
}
