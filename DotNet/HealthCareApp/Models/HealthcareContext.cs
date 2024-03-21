using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace HealthCareApp.Models;

public partial class HealthcareContext : DbContext
{
    public HealthcareContext()
    {
    }

    public HealthcareContext(DbContextOptions<HealthcareContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Appointment> Appointments { get; set; }

    public virtual DbSet<AppointmentTime> AppointmentTimes { get; set; }

    public virtual DbSet<Doctor> Doctors { get; set; }

    public virtual DbSet<LoginTable> LoginTables { get; set; }

    public virtual DbSet<Medicine> Medicines { get; set; }

    public virtual DbSet<MedicinePrescriptionTable> MedicinePrescriptionTables { get; set; }

    public virtual DbSet<Patient> Patients { get; set; }

    public virtual DbSet<Prescription> Prescriptions { get; set; }

    public virtual DbSet<RoleTable> RoleTables { get; set; }

    public virtual DbSet<Specialization> Specializations { get; set; }

    public virtual DbSet<State> States { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=healthcare", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.35-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Appointment>(entity =>
        {
            entity.HasKey(e => e.ApId).HasName("PRIMARY");

            entity.ToTable("appointments");

            entity.HasIndex(e => e.ApId, "ap_id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.DoctorId, "fk_doctor_appointment_id_idx");

            entity.HasIndex(e => e.PatientId, "fk_patient_appointment_id_idx");

            entity.Property(e => e.ApId).HasColumnName("ap_id");
            entity.Property(e => e.AppointmentDate)
                .HasMaxLength(20)
                .HasColumnName("appointment_date");
            entity.Property(e => e.AppointmentTime)
                .HasMaxLength(20)
                .HasColumnName("appointment_time");
            entity.Property(e => e.DoctorId).HasColumnName("doctor_id");
            entity.Property(e => e.Notes)
                .HasColumnType("text")
                .HasColumnName("notes");
            entity.Property(e => e.PatientId).HasColumnName("patient_id");
            entity.Property(e => e.Prescription).HasColumnName("prescription");
            entity.Property(e => e.Status)
                .HasMaxLength(45)
                .HasColumnName("status");

            entity.HasOne(d => d.Doctor).WithMany(p => p.Appointments)
                .HasForeignKey(d => d.DoctorId)
                .HasConstraintName("fk_doctor_appointment_id");

            entity.HasOne(d => d.Patient).WithMany(p => p.Appointments)
                .HasForeignKey(d => d.PatientId)
                .HasConstraintName("fk_patient_appointment_id");
        });

        modelBuilder.Entity<AppointmentTime>(entity =>
        {
            entity.HasKey(e => e.AppointId).HasName("PRIMARY");

            entity.ToTable("appointment_time");

            entity.HasIndex(e => e.AppointId, "appoint_id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.DocId, "fk_appointment_time_doc_id_idx");

            entity.Property(e => e.AppointId).HasColumnName("appoint_id");
            entity.Property(e => e.Day)
                .HasMaxLength(20)
                .HasColumnName("day");
            entity.Property(e => e.DocId).HasColumnName("doc_id");
            entity.Property(e => e.Flag).HasColumnName("flag");
            entity.Property(e => e.SlotEnd)
                .HasMaxLength(20)
                .HasColumnName("slot_end");
            entity.Property(e => e.SlotStart)
                .HasMaxLength(20)
                .HasColumnName("slot_start");

            entity.HasOne(d => d.Doc).WithMany(p => p.AppointmentTimes)
                .HasForeignKey(d => d.DocId)
                .HasConstraintName("fk_appointment_time_doc_id");
        });

        modelBuilder.Entity<Doctor>(entity =>
        {
            entity.HasKey(e => e.Doctorid).HasName("PRIMARY");

            entity.ToTable("doctor");

            entity.HasIndex(e => e.DoctorLoginId, "doc_login_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Phonenumber, "phonenumber_UNIQUE").IsUnique();

            entity.Property(e => e.Doctorid).HasColumnName("doctorid");
            entity.Property(e => e.Address)
                .HasMaxLength(50)
                .HasColumnName("address");
            entity.Property(e => e.City)
                .HasMaxLength(255)
                .HasColumnName("city");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.DoctorLoginId).HasColumnName("doctor_login_id");
            entity.Property(e => e.Education)
                .HasMaxLength(45)
                .HasColumnName("education");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(20)
                .HasColumnName("first_name");
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .HasColumnName("gender");
            entity.Property(e => e.Image).HasColumnName("image");
            entity.Property(e => e.LastName)
                .HasMaxLength(20)
                .HasColumnName("last_name");
            entity.Property(e => e.Phonenumber).HasColumnName("phonenumber");
            entity.Property(e => e.Pincode)
                .HasMaxLength(255)
                .HasColumnName("pincode");
            entity.Property(e => e.Specialization)
                .HasMaxLength(20)
                .HasColumnName("specialization");
            entity.Property(e => e.State)
                .HasMaxLength(255)
                .HasColumnName("state");

            entity.HasOne(d => d.DoctorLogin).WithOne(p => p.Doctor)
                .HasForeignKey<Doctor>(d => d.DoctorLoginId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("fk_doctorloginid");
        });

        modelBuilder.Entity<LoginTable>(entity =>
        {
            entity.HasKey(e => e.LoginId).HasName("PRIMARY");

            entity.ToTable("login_table");

            entity.HasIndex(e => e.RoleId, "fk_roleid_idx");

            entity.HasIndex(e => e.Username, "username_UNIQUE").IsUnique();

            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.IsApproved)
                .HasColumnType("bit(1)")
                .HasColumnName("is_approved");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.Username)
                .HasMaxLength(45)
                .HasColumnName("username");

            entity.HasOne(d => d.Role).WithMany(p => p.LoginTables)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("fk_roleid");
        });

        modelBuilder.Entity<Medicine>(entity =>
        {
            entity.HasKey(e => e.MedId).HasName("PRIMARY");

            entity.ToTable("medicines");

            entity.HasIndex(e => e.MedId, "med_id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.MedName, "med_name_UNIQUE").IsUnique();

            entity.Property(e => e.MedId).HasColumnName("med_id");
            entity.Property(e => e.MedName)
                .HasMaxLength(45)
                .HasColumnName("med_name");
        });

        modelBuilder.Entity<MedicinePrescriptionTable>(entity =>
        {
            entity.HasKey(e => e.PreMedId).HasName("PRIMARY");

            entity.ToTable("medicine_prescription_table");

            entity.HasIndex(e => e.MedId, "fk_med_id_idx");

            entity.HasIndex(e => e.PreId, "fk_presc_id_idx");

            entity.HasIndex(e => e.PreMedId, "pre_med_id_UNIQUE").IsUnique();

            entity.Property(e => e.PreMedId).HasColumnName("pre_med_id");
            entity.Property(e => e.Afternoon)
                .HasMaxLength(45)
                .HasColumnName("afternoon");
            entity.Property(e => e.Evening)
                .HasMaxLength(45)
                .HasColumnName("evening");
            entity.Property(e => e.MedId).HasColumnName("med_id");
            entity.Property(e => e.Morning)
                .HasMaxLength(45)
                .HasColumnName("morning");
            entity.Property(e => e.PreId).HasColumnName("pre_id");

            entity.HasOne(d => d.Med).WithMany(p => p.MedicinePrescriptionTables)
                .HasForeignKey(d => d.MedId)
                .HasConstraintName("fk_med_id");

            entity.HasOne(d => d.Pre).WithMany(p => p.MedicinePrescriptionTables)
                .HasForeignKey(d => d.PreId)
                .HasConstraintName("fk_presc_id");
        });

        modelBuilder.Entity<Patient>(entity =>
        {
            entity.HasKey(e => e.PatientId).HasName("PRIMARY");

            entity.ToTable("patient");

            entity.HasIndex(e => e.PatientLoginId, "fk_patientloginid_idx");

            entity.HasIndex(e => e.PhoneNumber, "phone_number_UNIQUE").IsUnique();

            entity.Property(e => e.PatientId).HasColumnName("patient_id");
            entity.Property(e => e.Address)
                .HasMaxLength(50)
                .HasColumnName("address");
            entity.Property(e => e.City)
                .HasMaxLength(45)
                .HasColumnName("city");
            entity.Property(e => e.EmailId)
                .HasMaxLength(25)
                .HasColumnName("email_id");
            entity.Property(e => e.FirstName)
                .HasMaxLength(20)
                .HasColumnName("first_name");
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .HasColumnName("gender");
            entity.Property(e => e.LastName)
                .HasMaxLength(20)
                .HasColumnName("last_name");
            entity.Property(e => e.PatientLoginId).HasColumnName("patient_login_id");
            entity.Property(e => e.PhoneNumber).HasColumnName("phone_number");
            entity.Property(e => e.Pincode).HasColumnName("pincode");
            entity.Property(e => e.State)
                .HasMaxLength(45)
                .HasColumnName("state");

            entity.HasOne(d => d.PatientLogin).WithMany(p => p.Patients)
                .HasForeignKey(d => d.PatientLoginId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("fk_patientloginid");
        });

        modelBuilder.Entity<Prescription>(entity =>
        {
            entity.HasKey(e => e.PrescId).HasName("PRIMARY");

            entity.ToTable("prescriptions");

            entity.HasIndex(e => e.DoctorId, "fk_doctor_id_idx");

            entity.HasIndex(e => e.PatientId, "fk_patient_id_idx");

            entity.HasIndex(e => e.PrescId, "pre_id_UNIQUE").IsUnique();

            entity.Property(e => e.PrescId).HasColumnName("presc_id");
            entity.Property(e => e.DateTime)
                .HasColumnType("timestamp")
                .HasColumnName("date_time");
            entity.Property(e => e.DoctorId).HasColumnName("doctor_id");
            entity.Property(e => e.PatientId).HasColumnName("patient_id");

            entity.HasOne(d => d.Doctor).WithMany(p => p.Prescriptions)
                .HasForeignKey(d => d.DoctorId)
                .HasConstraintName("fk_doctor_id");

            entity.HasOne(d => d.Patient).WithMany(p => p.Prescriptions)
                .HasForeignKey(d => d.PatientId)
                .HasConstraintName("fk_patient_id");
        });

        modelBuilder.Entity<RoleTable>(entity =>
        {
            entity.HasKey(e => e.Roleid).HasName("PRIMARY");

            entity.ToTable("role_table");

            entity.HasIndex(e => e.Roleid, "roleid_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Rolename, "rolename_UNIQUE").IsUnique();

            entity.Property(e => e.Roleid).HasColumnName("roleid");
            entity.Property(e => e.Rolename)
                .HasMaxLength(10)
                .HasColumnName("rolename");
        });

        modelBuilder.Entity<Specialization>(entity =>
        {
            entity.HasKey(e => e.Spid).HasName("PRIMARY");

            entity.ToTable("specialization");

            entity.Property(e => e.Spid).HasColumnName("spid");
            entity.Property(e => e.Specialization1)
                .HasMaxLength(255)
                .HasColumnName("specialization");
        });

        modelBuilder.Entity<State>(entity =>
        {
            entity.HasKey(e => e.StateId).HasName("PRIMARY");

            entity.ToTable("states");

            entity.Property(e => e.StateId).HasColumnName("state_id");
            entity.Property(e => e.StateName)
                .HasMaxLength(255)
                .HasColumnName("state_name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
